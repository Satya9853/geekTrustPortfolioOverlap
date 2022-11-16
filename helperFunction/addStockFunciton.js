const fundExist = require("../error/fundExist");

const addStock = (user, funds, commandsObject) => {
  const n = commandsObject.ADD_STOCK.length;
  let fundName, stockName;
  if (n > 2) {
    fundName = commandsObject.ADD_STOCK[0];
    stockName = commandsObject.ADD_STOCK.slice(1, n).join(" ");
  } else {
    fundName = commandsObject.ADD_STOCK[0];
    stockName = commandsObject.ADD_STOCK[1];
  }
  if (!fundExist(funds, [fundName])) {
    //checks whether the fund exists or not
    console.log("FUND_NOT_FOUND");
    return;
  }
  user.stockOperation.addStock(funds, fundName, stockName);
};

module.exports = addStock;
