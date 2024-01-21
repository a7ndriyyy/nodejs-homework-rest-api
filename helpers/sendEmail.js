const nodemailer = require("nodemailer");
require("dotenv").config();

const { PASSWORD } = process.env;

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "andrii.test.mail@meta.ua",
    pass: PASSWORD,
  },
};

const transport = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: "andrii.test.mail@meta.ua",
  };
  await transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
  return true;
};

module.exports = sendEmail;
