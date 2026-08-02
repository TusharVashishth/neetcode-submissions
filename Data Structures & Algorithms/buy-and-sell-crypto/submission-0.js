class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let minPrice = Infinity;
    let maxProfitVal = 0;

    for (let price of prices) {
        if (price < minPrice) minPrice = price;
        const profit = price - minPrice;
        if (profit > maxProfitVal) maxProfitVal = profit;
    }

    return maxProfitVal;
    }
}
