// this class is responsible for adding the funds to the user portfolio

class createPortfolio {
  #getFund(fundName, funds) {
    // searches for the fund which has to be added to user porfolio
    const matchedFund = funds.find((fund) => fund.name === fundName);
    return matchedFund;
  }

  addFunds(user, fundsNameArray, funds) {
    // it gets the matching fund and adds it to the portfolio
    fundsNameArray.forEach((fundName) => {
      user.portfolio.portfolio.push(this.#getFund(fundName, funds));
    });
  }
}

module.exports = createPortfolio;
