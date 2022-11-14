class portfolio {
  constructor() {
    this.portfolio = [];
  }

  getPortfolio() {
    if (this.portfolio.length > 0) return this.portfolio;
  }
}

module.exports = portfolio;
