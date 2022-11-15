const portfolioClass = require("../commandClasses/portfolioClass");
const portfolioOverlapClass = require("../commandClasses/portfolioOverlapClass");
const createPortfolioClass = require("../commandClasses/createPortfolioClass");
const stockOperationClass = require("../commandClasses/stockOperationClass");

class User {
  constructor() {
    this.portfolio = new portfolioClass();
    this.portfolioOverlap = new portfolioOverlapClass();
    this.createPortfolio = new createPortfolioClass();
    this.stockOperation = new stockOperationClass();
  }
}

module.exports = User;
