class stockOperation {
  addStock(funds, fundName, stockName) {
    const matchedFund = funds.find((fund) => fund.name === fundName);
    matchedFund.stocks.push(stockName);
  }
}

module.exports = stockOperation;
