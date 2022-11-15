const fsPromises = require("fs/promises");

class ioManager {
  async #readFileAsync(source_to_file) {
    try {
      const contents = await fsPromises.readFile(source_to_file, "utf-8");
      return contents;
    } catch (error) {
      console.log(error);
    }
  }

  getParsedCommand(commandString) {
    const commandObject = {};
    const [command, ...values] = commandString
      .replace(/(\r\n|\n|\r)/gm, "")
      .split(" ");
    commandObject[command] = values;
    return commandObject;
  }

  async readFundsAsync(source_to_file) {
    const data = await this.#readFileAsync(source_to_file);
    const funds = await JSON.parse(data).funds;
    return funds;
  }

  getFund(fundName, funds) {
    let matchedFund = funds.find((fund) => fundName[0] === fund.name);
    return matchedFund;
  }
}

module.exports = ioManager;
