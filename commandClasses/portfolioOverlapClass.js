// this class is for calculating the overlap of funds

class overlapClass {
  // this takes two list of stocks and uses a hashmap to find the common stocks and returns the overlap value
  #calculateOverlap(stock1, stock2) {
    const sizeOfFund1 = stock1.length;
    const sizeOfFund2 = stock2.length;
    const hashMap = {};
    let commonStock = 0;
    for (let i = 0; i < sizeOfFund1; i++) {
      hashMap[stock1[i]] = 1;
    }
    for (let i = 0; i < sizeOfFund2; i++) {
      if (hashMap[stock2[i]] === 1) {
        commonStock += 1;
      }
    }
    const overlap_value = ((2 * commonStock) / (sizeOfFund1 + sizeOfFund2)) * 100;
    return overlap_value.toFixed(2);
  }

  //this is a getter method to send overlap value
  getOverlap(user, overlapFund) {
    const overlapTest = [];
    user.portfolio.portfolio.forEach((fund) => {
      const overlap = this.#calculateOverlap(fund.stocks, overlapFund.stocks);
      overlapTest.push(overlap);
      if (overlap != 0) console.log(`${overlapFund.name} ${fund.name} ${overlap}%`);
    });
    return overlapTest;
  }
}

module.exports = overlapClass;
