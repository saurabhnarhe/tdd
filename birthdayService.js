const friendStore = require("./friendStore");
const mailService = require("./mailService");

const greetFriends = () => {
  // read friends
  // filter out friends who have birthday today
  // send email
  const friends = friendStore.getFriends("./friends.json");

  const friendsWithBirthday = friends
    ? friends.filter((friend) => {
        return (
          friend.dob.getDate() === new Date().getDate() &&
          friend.dob.getMonth() === new Date().getMonth()
        );
      })
    : [];

  friendsWithBirthday.forEach((friend) => {
    const mailOptions = {
      from: "birthdayservice@gmail.com",
      to: friend.email,
      subject: "Happy birthday!",
      body: `Happy birthday, dear ${friend.firstName}!`,
    };
    mailService.sendMail(mailOptions);
  });
};

module.exports = {
  greetFriends,
};
