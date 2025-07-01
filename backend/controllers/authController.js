import { User } from "../models/userSchema.js";
import { sendSMS } from "../utils/sendSMS.js";
import { generateOTP } from "../utils/generateOTP.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { generateToken } from "../utils/jwtToken.js";

// Send OTP
export const sendOTP = catchAsyncErrors(async (req, res, next) => {
  const { phone } = req.body;
  if (!phone) return next(new ErrorHandler("Phone number is required", 400));

  const otp = generateOTP();
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  let user = await User.findOne({ phone });
  if (!user) {
    user = await User.create({ phone, otp, otpExpiresAt, role: "Patient" });
  } else {
    user.otp = otp;
    user.otpExpiresAt = otpExpiresAt;
    await user.save();
  }

  await sendSMS(phone, `Your OTP is ${otp}`);

  res.status(200).json({
    success: true,
    message: "OTP sent to your phone",
  });
});

// Verify OTP
export const verifyOTP = catchAsyncErrors(async (req, res, next) => {
  const { phone, otp } = req.body;

  const user = await User.findOne({ phone });
  if (!user || user.otp !== otp || user.otpExpiresAt < Date.now()) {
    return next(new ErrorHandler("Invalid or expired OTP", 400));
  }

  user.otp = undefined;
  user.otpExpiresAt = undefined;
  await user.save();

  generateToken(user, "Login successful", 200, res);
});
