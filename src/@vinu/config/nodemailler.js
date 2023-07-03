import nodemailer from "nodemailer";

const email = process.env.EMAIL_FROM;
const emailTo = process.env.EMAIL_TO;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});

export const mailOptions = {
    from: email,
    to: emailTo,
};