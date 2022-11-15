const ioManagerClass = require("./ioManager/ioManager");

const input_source = "./sample_input/input1.txt";
const funds_input_source = "./data.json";

ioManager = new ioManagerClass();

const getCommand = async () => {
  let commands = await ioManager.readCommandAsync(input_source);
  return commands;
};

const getFunds = async () => {
  let funds = await ioManager.readFundsAsync(funds_input_source);
  return funds;
};

const getStock = async (stock_name) => {
  let stock = await ioManager.getStocksAsync(stock_name, funds_input_source);
  return stock;
};

const fundExist = require("./error/fundExist");

const check = async () => {
  const funds = await getFunds();
  console.log(fundExist(funds, "NIPPON_INDIA_PHARMA_FUND"));
};

check();
