const fs = require("fs");

const getFriends = (filePath) => {
  if (!filePath) throw new Error("filePath not specified");
  else return fs.readFile(filePath);
};

module.exports = {
  getFriends,
};
