const add = (...numbers) => {
  if (numbers.length > 0) {
    return numbers.reduce((sum, num) => sum + num, 0);
  } else return 0;
};

module.exports = {
  add,
};
