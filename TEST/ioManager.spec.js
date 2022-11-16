require("dotenv").config();
const ioManagerClass = require("../ioManager/ioManager");
const chai = require("chai");
const expect = chai.expect;

const ioManager = new ioManagerClass();

describe("IoManager Class Method Test", function () {
  describe("get parsed command method test", function () {
    const parsedCommand = ioManager.getParsedCommand("CALCULATE_OVERLAP ICICI_PRU_BLUECHIP");
    it("Check the key of the object", function () {
      expect(parsedCommand).to.have.property("CALCULATE_OVERLAP");
    });
  });

  describe("This test is for readFund Async", function () {
    it("Should return an array", async function () {
      const funds = await ioManager.readFundsAsync(process.env.funds_input_source);
      expect(funds).to.be.an("array");
    });
  });

  describe("This test is for getFund", function () {
    it("Should return a Object with keys [name, sotcks]", async function () {
      const funds = await ioManager.readFundsAsync(process.env.funds_input_source);
      const fund = ioManager.getFund(["ICICI_PRU_BLUECHIP"], funds);
      expect(fund).to.be.an("object");
      expect(fund).to.include.all.keys("name", "stocks");
    });
  });
});
