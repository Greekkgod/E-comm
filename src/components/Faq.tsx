import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { popping } from "@/utils/fonts"

export default function FAQ() {
  return (
    <div className={`container mx-auto px-6 py-12 text-center ${popping.className}`}>
      <h1 className="text-5xl font-normal mb-12">Frequently Asked Questions</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="relative aspect-square w-80 lg:w-96">
          <Image
            src={"/images/blogs/blog5.jpg"}
            alt="FAQ decorative image"
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="w-full max-w-2xl text-left">
          <h2 className="text-2xl font-medium mb-4 text-center lg:text-left">
            Quick Answers to Some Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg">Do you offer fresh vegetables and fruits daily?</AccordionTrigger>
              <AccordionContent className="text-base">
                Yes, we receive fresh stock of vegetables and fruits every morning directly from trusted local farms and suppliers to ensure maximum freshness and quality.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg">Are your products organic?</AccordionTrigger>
              <AccordionContent className="text-base">
                We offer a wide selection of organic vegetables and fruits. Look for items labeled “organic” in our store or filter your search online by the organic category.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg">Do you provide home delivery?</AccordionTrigger>
              <AccordionContent className="text-base">
                Yes, we offer same-day delivery within the city on orders placed before 4 PM. Delivery slots can be chosen during checkout. Free delivery is available on orders above ₹499.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-lg">What is your return or replacement policy for groceries?</AccordionTrigger>
              <AccordionContent className="text-base">
                If you're not satisfied with the quality of any item, we offer easy replacements or refunds within 24 hours of delivery. Just contact our support team with your order ID.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-lg">How do you ensure hygiene and freshness?</AccordionTrigger>
              <AccordionContent className="text-base">
                All our fruits and vegetables are cleaned, handled with care, and stored in temperature-controlled environments. Our team follows strict hygiene protocols from farm to doorstep.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
          <div className="flex justify-center lg:justify-start mt-6 ">
            <Button variant="outline" className="
              text-amber-800 bg-transparent 
              hover:bg-amber-800 hover:text-white border-amber-800 text-lg px-6 py-3
            ">
              Get Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}