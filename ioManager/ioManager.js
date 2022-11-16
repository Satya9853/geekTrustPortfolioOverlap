const fsPromises = require("fs/promises");

// this class is responsible for input and output of data
class ioManager {
  // reads the file data from the given source file and returns it
  async #readFileAsync(source_to_file) {
    try {
      const contents = await fsPromises.readFile(source_to_file, "utf-8");
      return contents;
    } catch (error) {
      console.log(error);
    }
  }

  // it takes the command string and structures them as objects
  getParsedCommand(commandString) {
    const commandObject = {};
    const [command, ...values] = commandString.replace(/(\r\n|\n|\r)/gm, "").split(" ");
    commandObject[command] = values;
    return commandObject;
  }

  // this receives the fund data converts to JSON object and returns it
  async readFundsAsync(source_to_file) {
    const data = await this.#readFileAsync(source_to_file);
    const funds = await JSON.parse(data).funds;
    return funds;
  }

  // this takes funds and a fund name and returns the matching fund from list of funds
  getFund(fundName, funds) {
    let matchedFund = funds.find((fund) => fundName[0] === fund.name);
    return matchedFund;
  }
}

module.exports = ioManager;
