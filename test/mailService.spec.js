const { expect } = require("chai");
const sinon = require("sinon");
const nodemailer = require("nodemailer");
const { sendMail } = require("../mailService");

describe("mailService", () => {
  describe("sendMail", () => {
    it("should send mail with provided options", () => {
      const fake_sendMail = sinon.fake.resolves();
      const fake_createTransport = sinon.fake.returns({
        sendMail: fake_sendMail,
      });

      sinon.replace(nodemailer, "createTransport", fake_createTransport);

      const options = {
        from: "sender@gmail.com",
        to: "reciver@gmail.com",
        subject: "happy birthday",
        body: "happy birthday",
      };

      sendMail(options);

      expect(fake_createTransport.calledOnce).to.be.true;

      expect(fake_sendMail.calledOnceWithExactly(options)).to.be.true;
    });
  });
});
