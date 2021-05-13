const { expect } = require("chai");
const sinon = require("sinon");
const friendStore = require("../friendStore");
const { greetFriends } = require("../birthdayService");
const mailService = require("../mailService");

describe("birthdayService", () => {
  describe("greetFriends", () => {
    it("should call getFreinds from friendStore", () => {
      const fake_getFriends = sinon.fake();
      sinon.replace(friendStore, "getFriends", fake_getFriends);

      greetFriends();

      expect(fake_getFriends.calledOnceWithExactly("./friends.json")).to.be
        .true;
    });

    it("should send mail to friends who have birthday today", () => {
      const friends = [
        {
          firstName: "saurabh",
          lastName: "narhe",
          dob: new Date(1998, new Date().getMonth(), new Date().getDate()),
          email: "saurabh@gmail.com",
        },
        {
          firstName: "saurabh",
          lastName: "narhe",
          dob: new Date(1998, 9, new Date().getDate()),
          email: "saurabh@gmail.com",
        },
      ];

      const fake_getFriends = sinon.fake.returns(friends);
      sinon.replace(friendStore, "getFriends", fake_getFriends);

      const fake_sendMail = sinon.fake();
      sinon.replace(mailService, "sendMail", fake_sendMail);

      greetFriends();

      expect(fake_getFriends.calledOnceWithExactly("./friends.json")).to.be
        .true;

      const mailOptions = {
        from: "birthdayservice@gmail.com",
        to: friends[0].email,
        subject: "Happy birthday!",
        body: `Happy birthday, dear ${friends[0].firstName}!`,
      };

      expect(fake_sendMail.calledOnceWithExactly(mailOptions)).to.be.true;
    });
  });
});
