// this class is for stock related operation here we only have one stock operation which is to add stocks

class stockOperation {
  addStock(funds, fundName, stockName) {
    const matchedFund = funds.find((fund) => fund.name === fundName);
    matchedFund.stocks.push(stockName);
  }
}

module.exports = stockOperation;
