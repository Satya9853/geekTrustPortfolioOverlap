const fundExist = require("../error/fundExist");

const executingCommands = (user, commandsObject, funds) => {
  switch (Object.keys(commandsObject)[0]) {
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
          console.log("FUND_NOT_FOUND");
          break;
        }
        const overLappingFund = ioManager.getFund(fundName, funds);
        user.portfolioOverlap.getOverlap(user, overLappingFund);
      }
      break;
    case "ADD_STOCK":
      {
        user.stockOperation.addStock(
          funds,
          commandsObject.ADD_STOCK[0],
          commandsObject.ADD_STOCK[1]
        );
      }
      break;
  }
};

module.exports = executingCommands;
