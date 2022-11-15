class overlapClass {
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
    const overlap_value =
      ((2 * commonStock) / (sizeOfFund1 + sizeOfFund2)) * 100;
    return overlap_value.toFixed(2);
  }

  getOverlap(user, overlapFund) {
    user.portfolio.portfolio.forEach((fund) => {
      const overlap = this.#calculateOverlap(fund.stocks, overlapFund.stocks);
      console.log(`${overlapFund.name} ${fund.name} ${overlap}%`);
    });
  }
}

module.exports = overlapClass;
