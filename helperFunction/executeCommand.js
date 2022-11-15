const fundExist = require("../error/fundExist");

// used swtich case to execute command based on input

const executingCommands = (user, commandsObject, funds) => {
  switch (
    Object.keys(commandsObject)[0] //this takes the key which is our command as checking condition
  ) {
    case "CURRENT_PORTFOLIO":
      {
        user.createPortfolio.addFunds(
          user,
          commandsObject.CURRENT_PORTFOLIO,
          funds
        );
      }
      break;
    case "CALCULATE_OVERLAP":
      {
        const fundName = commandsObject.CALCULATE_OVERLAP;
        if (!fundExist(funds, fundName)) {
          //checks whether the fund exists or not
          console.log("FUND_NOT_FOUND");
          break;
        }
        const overLappingFund = ioManager.getFund(fundName, funds);
        user.portfolioOverlap.getOverlap(user, overLappingFund);
      }
      break;
    case "ADD_STOCK":
      {
        const fundName = commandsObject.ADD_STOCK[0];
        const stockName = commandsObject.ADD_STOCK[1];
        if (!fundExist(funds, [fundName])) {
          //checks whether the fund exists or not
          console.log("FUND_NOT_FOUND");
          break;
        }
        user.stockOperation.addStock(funds, fundName, stockName);
      }
      break;
  }
};

module.exports = executingCommands;
