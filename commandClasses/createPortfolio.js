const portfolioClass = require("./portfolio");

class createPortfolio extends portfolioClass {
  #getFund(fundName, funds) {
    const matchedFund = funds.find((fund) => fund.name === fundName);
    return matchedFund;
  }

  addFunds(fundsNameArray, funds) {
    fundsNameArray.forEach((fundName) => {
      this.portfolio.push(this.#getFund(fundName, funds));
    });
  }
}

module.exports = createPortfolio;
