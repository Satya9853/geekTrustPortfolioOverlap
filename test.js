const ioManagerClass = require("./ioManager/ioManager");
const portfolioClass = require("./commandClasses/portfolio");
const createPortfolioClass = require("./commandClasses/createPortfolio");
const overlapClass = require("./commandClasses/portfolioOverlap");
const stockOperation = require("./commandClasses/stockOperation");

// const input_source = "./sample_input/input1.txt";
const funds_input_source = "./data.json";

ioManager = new ioManagerClass();
const user_portfolio = new portfolioClass();

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

const currentPortfolio = async () => {
  const commands = await getCommand();
  const funds = await getFunds();
  const createPortfolio = new createPortfolioClass();
  const parsedCommand = commands[0].split(" ");
  const [command, ...fundsNameArray] = parsedCommand;
  createPortfolio.addFunds(user_portfolio, fundsNameArray, funds);
};

const overlapfunc = async () => {
  await currentPortfolio();
  overlap = new overlapClass();
  let overlapStock = await getStock("MIRAE_ASSET_LARGE_CAP");
  let value = overlap.getOverlap(user_portfolio, overlapStock);
  console.log(value);
};

const addStock = async () => {
  const stockOp = new stockOperation();
  const funds = await getFunds();
  stockOp.addStock(funds, "AXIS_BLUECHIP", "TCS");
};

overlapfunc();
addStock();
