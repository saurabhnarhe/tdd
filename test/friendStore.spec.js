const { assert, expect } = require("chai");
const { getFriends } = require("../friendStore");
const sinon = require("sinon");
const fs = require("fs");

describe("friendStore", () => {
  describe("getFriends", () => {
    it("should throw error if filePath is not given", () => {
      assert.throws(() => getFriends(), "filePath not specified");
    });

    it("should return list of friends from file", () => {
      const friends = [
        {
          firstName: "John",
          lastName: "Snow",
          dob: new Date(),
          email: "john@gmail.com",
        },
      ];
      const fake_readFile = sinon.fake.returns(friends);
      sinon.replace(fs, "readFile", fake_readFile);

      const result = getFriends("./friends.json");

      expect(result).to.deep.equals(friends);
      expect(fake_readFile.calledOnceWithExactly("./friends.json")).to.be.true;
    });
  });
});
