const fsPromises = require("fs/promises");

class ioManager {
  constructor() {}

  async readFileAsync(source_to_file) {
    try {
      const contents = await fsPromises.readFile(source_to_file, "utf-8");
      return contents;
    } catch (error) {
      console.log(error);
    }
  }

  async readCommandAsync(source_to_file) {
    const data = await this.readFileAsync(source_to_file);
    const commandArray = data.split(/\r?\n/);
    return commandArray;
  }

  async readFundsAsync(source_to_file) {
    const data = await this.readFileAsync(source_to_file);
    const funds = await JSON.parse(data).funds;
    return funds;
  }
}

module.exports = ioManager;
