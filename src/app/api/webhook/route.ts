import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const event = body.event;

    console.log("🔥 Webhook received:", JSON.stringify(body, null, 2));

    if (event === "PAYMENT_SUCCESS") {
      const { order_id, payment_id } = body.data;

      // 1. Find the existing order
      const existingOrder = await prisma.order.findUnique({
        where: { orderId: order_id },
        include: { items: { include: { product: true } }, user: true },
      });

      if (!existingOrder) {
        console.error("❌ Order not found for orderId:", order_id);
        return NextResponse.json({ error: "Order not found" }, { status: 404 });
      }

      if (existingOrder.status === "PAID") {
        console.log("✅ Order already PAID:", order_id);
        return NextResponse.json({ 
          success: true,
          orderId: existingOrder.id, 
          message: "Order already processed" 
        });
      }

      // 2. Update Order Status
      const updatedOrder = await prisma.order.update({
        where: { id: existingOrder.id },
        data: {
          status: "PAID",
          paymentId: payment_id,
        },
        include: { items: { include: { product: true } } }
      });

      console.log("✅ Order updated to PAID:", updatedOrder.id);

      // 3. Clear the User's Cart
      if (existingOrder.userId) {
        // Find cart first to be safe, though we could deleteMany directly with userId if CartItem had userId.
        // CartItem relies on CartId.
        const cart = await prisma.cart.findUnique({
          where: { userId: existingOrder.userId },
        });

        if (cart) {
          await prisma.cartItem.deleteMany({
            where: { cartId: cart.id },
          });
          console.log("🧹 Cart cleared for user:", existingOrder.userId);
        }
      }

      // 4. Send Email
      try {
        await sendOrderEmail(updatedOrder, updatedOrder.items);
      } catch (emailError: any) {
        console.error("⚠️ Email sending failed:", emailError.message);
      }

      return NextResponse.json({ 
        success: true,
        orderId: updatedOrder.id,
        message: "Order processed successfully" 
      });
    }

    return NextResponse.json({ message: "Unhandled event" });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return new Response(`Webhook error: ${error.message}`, { status: 500 });
  }
}

// ✅ Email Sending Function
async function sendOrderEmail(order: any, items: any[]) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("⚠️ Email credentials not configured");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsList = items && items.length
    ? `
      <h3>Items:</h3>
      <ul>
        ${items.map((item) =>
          `<li>${item.product?.name || 'Unknown Product'} (x${item.quantity}) - ₹${item.price}</li>`
        ).join("")}
      </ul>`
    : `<p>Direct payment of ₹${order.total}</p>`;

  const emailBody = `
    <h2>New Order Received</h2>
    <p>Order ID: ${order.orderId}</p>
    <p>Total Amount: ₹${order.total}</p>
    ${itemsList}
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "gaurpradhumay@gmail.com", // Admin email address
    subject: "New Order Received",
    html: emailBody,
  });

  console.log("📨 Email sent to admin for order:", order.orderId);
}