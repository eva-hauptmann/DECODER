// Write your tests here!
const { describe } = require("mocha");
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius()", () => {
  describe("Checking Parameters", () => {
    it("While decoding if the input has an odd number of characters (excluding spaces) return false ", () => {
      const oddInput = "321152543311 2311441144111";
      const actual = polybius(oddInput, (encode = false));
      expect(actual).to.be.false;
    });
  });
  describe("Encoding and Decoding", () => {
    it("When encoding a string should be returned", () => {
      const input = "Hakuna Matata";
      const actual = polybius(input, (encode = true));
      //console.log(actual)
      expect(typeof actual).to.equal("string");
    });
    it("should encode properly", () => {
      const input = "Hakuna Matata";
      const actual = polybius(input, (encode = true));
      const expected = "321152543311 231144114411";
      expect(actual).to.equal(expected);
    });
    it("When decoding and you encounter I or J display both options e.g.((i/j))", () => {
      const input = "4244 2351113334 3343 25432424425134";
      const actual = polybius(input, (encode = false));
      const expected = "(i/j)t means no worr(i/j)es";
      expect(actual).to.equal(expected);
    });
  });
});