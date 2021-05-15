const nodemailer = require("nodemailer");

const sendMail = (options) => {
  const transport = nodemailer.createTransport({});
  transport.sendMail(options);
};

module.exports = {
  sendMail,
};
