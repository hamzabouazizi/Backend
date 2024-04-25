const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    let transporter = nodemailer.createTestAccount({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth : {
            user: process.env.MAIL_ID,
            pass: process.env.MP,
        },
    });
    let info = await transporter.sendEmail({
        from: '"heyy" <abc@gmail.com>',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
    });

  });

  
module.exports = sendEmail;