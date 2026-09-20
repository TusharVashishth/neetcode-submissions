class Solution {
    public int maxProfit(int[] prices) {
        
        int minPrice = prices[0];
        int maximumProfit = 0;

        for(int price : prices) {

            if(price < minPrice) minPrice = price;

            var profit = price - minPrice;

            maximumProfit = Math.max(maximumProfit , profit);

        }

        return maximumProfit;
    }
}
