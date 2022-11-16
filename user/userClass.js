const portfolioClass = require("../commandClasses/portfolioClass");
const portfolioOverlapClass = require("../commandClasses/portfolioOverlapClass");
const createPortfolioClass = require("../commandClasses/createPortfolioClass");
const stockOperationClass = require("../commandClasses/stockOperationClass");

// this class created a user with all operation which could be executed in a user portfolio
// it basically encapsulates all the classes

class User {
  constructor() {
    this.portfolio = new portfolioClass();
    this.portfolioOverlap = new portfolioOverlapClass();
    this.createPortfolio = new createPortfolioClass();
    this.stockOperation = new stockOperationClass();
  }
}

module.exports = User;
