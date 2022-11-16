const addStockHelperFunction = require("./addStockFunciton");
const calculateOverlapHelperFunction = require("./calculateOverlapFunction");

// used swtich case to execute command based on input

const executingCommands = (user, commandsObject, funds) => {
  switch (
    Object.keys(commandsObject)[0] //this takes the key which is our command as checking condition
  ) {
    case "CURRENT_PORTFOLIO":
      {
        user.createPortfolio.addFunds(user, commandsObject.CURRENT_PORTFOLIO, funds);
      }
      break;
    case "CALCULATE_OVERLAP":
      {
        calculateOverlapHelperFunction(user, commandsObject, funds);
      }
      break;
    case "ADD_STOCK":
      {
        addStockHelperFunction(user, funds, commandsObject);
      }
      break;
  }
};

module.exports = executingCommands;
