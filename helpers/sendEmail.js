const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "andrii.nastych@gmail.com",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = { ...data, from: "andrii.nastych@gmail.com" };
  await transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
