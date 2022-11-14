//Add your tests here
const createPortfolio = require("./commandClasses/createPortfolio");
const ioManager = require("./ioManager/main");

const getCommands = async () => {
  const ioObject = new ioManager();
  const commands = await ioObject.readCommand("./sample_input/input1.txt");
  console.log(commands);
};

const getFunds = async () => {
  const ioObject = new ioManager();
  const funds = await ioObject.readFundsAsync("./data.json");
  return funds;
};

const creatingPortfolio = async () => {
  const funds = await getFunds();

  const myPortfolio = new createPortfolio();
  myPortfolio.addFunds(
    ["AXIS_BLUECHIP", "ICICI_PRU_BLUECHIP", "UTI_NIFTY_INDEX"],
    funds
  );

  console.log(myPortfolio.getPortfolio());
};

creatingPortfolio();
