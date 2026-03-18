const crypto = require("crypto");

// function to generate secure OTP
function generateOTP() {
  const min = 1000; // minimum 4-digit
  const max = 9999; // maximum 4-digit

  // crypto gives secure random number
  const otp = crypto.randomInt(min, max + 1);

  return otp;
}

// calling function
console.log("Your Secure OTP is:", generateOTP());