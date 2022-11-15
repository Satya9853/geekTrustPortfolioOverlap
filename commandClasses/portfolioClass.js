class portfolioClass {
  constructor() {
    this.portfolio = [];
  }

  getPortfolio() {
    if (this.portfolio.length > 0) return this.portfolio;
    else throw new Error("portfolio data not added");
  }
}

module.exports = portfolioClass;
