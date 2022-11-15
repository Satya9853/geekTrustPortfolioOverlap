class createPortfolio {
  #getFund(fundName, funds) {
    const matchedFund = funds.find((fund) => fund.name === fundName);
    return matchedFund;
  }

  addFunds(user, fundsNameArray, funds) {
    fundsNameArray.forEach((fundName) => {
      user.portfolio.portfolio.push(this.#getFund(fundName, funds));
    });
  }
}

module.exports = createPortfolio;
