const portfolio = require("./portfolio");

class stockOperation extends portfolio {
  addStock(funds, fundName, stockName) {
    const matchedFund = funds.find((fund) => fund.name === fundName);
    matchedFund.stocks.push(stockName);
    console.log(matchedFund);
  }
}

module.exports = stockOperation;
