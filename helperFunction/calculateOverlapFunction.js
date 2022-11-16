const fundExist = require("../error/fundExist");

const calculateOverlap = (user, commandsObject, funds) => {
  const fundName = commandsObject.CALCULATE_OVERLAP;
  if (!fundExist(funds, fundName)) {
    //checks whether the fund exists or not
    console.log("FUND_NOT_FOUND");
    return;
  }
  const overLappingFund = ioManager.getFund(fundName, funds);
  user.portfolioOverlap.getOverlap(user, overLappingFund);
};

module.exports = calculateOverlap;
