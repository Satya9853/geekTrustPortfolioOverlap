//this is a error handler function which checks whether the fund exist or not

const fundExist = (funds, fundName) => {
  let doesExist = false;
  if (funds.find((fund) => fund.name === fundName[0])) doesExist = true;
  return doesExist;
};

module.exports = fundExist;
