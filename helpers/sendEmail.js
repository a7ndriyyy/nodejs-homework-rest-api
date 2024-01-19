const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "sandbox.smtp.mailtrap.io",
  port: 587,
  secure: true,
  auth: {
    user: "9f3bf0162cc922",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "9f3bf0162cc922",
  };
  await transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
