require("dotenv").config();
const fs = require("fs");

//local imports
const populate = require("./dataManager/populate");
const ioManagerClass = require("./ioManager/ioManager");
const portfolioClass = require("./commandClasses/portfolio");

const filename = process.argv[2];
let inputLines, funds;

fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  inputLines = data.toString().split("\n");
  console.log(inputLines);
});

const executingCommands = (commandsObject, userPortfolio) => {
  switch (commandsObject.keys[0]) {
    case "CURRENT_PORTFOLIO":
      {
        userPortfolio.createPortfolio.addFunds(
          commandsObject.CURRENT_PORTFOLIO,
          funds
        );
      }
      break;
    case "CALCULATE_OVERLAP":
      {
        userPortfolio.portfolioOverlap.getOverlap(
          commandsObject.CALCULATE_OVERLAP
        );
      }
      break;
    case "ADD_STOCK":
      {
        userPortfolio.stockOperation.addStock(
          funds,
          commandsObject.ADD_STOCK[0],
          commandsObject.ADD_STOCK[1]
        );
      }
      break;
  }
};

const main = async () => {
  // populating the json file at every run of main function to always have the updated data
  await populate();
  // creating the ioManager Object(input-output manager)
  ioManager = new ioManagerClass();

  // getting the funds data
  funds = ioManager.readFundsAsync(process.env.funds_input_source);
  // initializing portfolio of a user
  const userPortfolio = new portfolioClass();
  // parsing the input command and getting return as an object
  console.log(portfolioClass);
  inputLines.forEach((input) => {
    const commandsObject = ioManager.getParsedCommand(input);
    // executingCommands(userPortfolio, commandsObject);
    console.log(commands);
  });
};

main();
