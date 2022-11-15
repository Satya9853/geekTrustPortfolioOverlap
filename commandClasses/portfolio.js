const createPortfolioClass = require("./createPortfolio");
const portfolioOverlapClass = require("./portfolioOverlap");
const stockOperationClass = require("./stockOperation");

class portfolioClass {
  constructor() {
    this.portfolio = [];
    this.createPortfolio = new createPortfolioClass();
    this.portfolioOverlap = new portfolioOverlapClass();
    this.stockOperation = new stockOperationClass();
  }

  getPortfolio() {
    if (this.portfolio.length > 0) return this.portfolio;
    else throw new Error("portfolio data not added");
  }
}

module.exports = portfolioClass;
