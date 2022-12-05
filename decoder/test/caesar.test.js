// Write your tests here!
const { describe } = require("mocha");
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
describe("caesar", () => {
  describe("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
    const shift1 = undefined;
    const shift2 = 0;
    const shift3 = -26;
    const shift4 = 26;
    const input = "Hakuna Matata";
    const encode = true;
    it("if shift is undefined caesar() should return false", () => {
      const actual = caesar(input, shift1, encode);
      expect(actual).to.be.false;
    });
    it("if shift = 0 caesar() should return false", () => {
      const actual = caesar(input, shift2, encode);
      expect(actual).to.be.false;
    });
    it("if shift < -25 caesar() should return false", () => {
      const actual = caesar(input, shift3, encode);
      expect(actual).to.be.false;
    });
    it("if shift > 25 caesar() should return false", () => {
      const actual = caesar(input, shift4, encode);
      expect(actual).to.be.false;
    });
  });
  describe("Encoding and Decoding", () => {
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
      const shift = 6;
      const input = "** Hakuna-Matata **";
      const encode = true;
      const actual = caesar(input, shift, encode);
      const expected = "** Ngqatg-Sgzgzg **";
      expect(expected.toLowerCase()).to.equal(actual.toLowerCase());
    });
     it("If a letter is shifted so that it goes off the alphabet it should wrap around to the front of the alphabet ", ()=>{
        const shift = 12
        const input = "Hakuna-Matata"
        const encode = true
        const actual =   caesar(input,shift,encode)
        const expected = "Tmwgzm-Ymfmfm"
        expect(expected.toLowerCase()).to.equal(actual.toLowerCase())
       })
    it("decode when encode param is false", () => {
      const shift = 12;
      const input = "Tmwgzm-Ymfmfm";
      const encode = false;
      const actual = caesar(input, shift, encode);
      const expected = "Hakuna-Matata";
      expect(expected.toLowerCase()).to.equal(actual.toLowerCase());
    });
  });
});