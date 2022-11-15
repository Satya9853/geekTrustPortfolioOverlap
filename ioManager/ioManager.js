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
    const [command, ...values] = commandString.split(" ");
    commandObject[command] = values;
    return commandObject;
  }

  async readFundsAsync(source_to_file) {
    const data = await this.#readFileAsync(source_to_file);
    const funds = await JSON.parse(data).funds;
    return funds;
  }

  async getStocksAsync(stockName, source_to_file) {
    let funds = await this.readFundsAsync(source_to_file);
    let stock = await funds.find((fund) => stockName === fund.name);
    return stock;
  }
}

module.exports = ioManager;
