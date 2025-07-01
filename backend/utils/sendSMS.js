import twilio from "twilio";

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (phone, message) => {
  return await client.messages.create({
    body: message,
    from: process.env.TWILIO_PHONE,
    to: phone,
  });
};
