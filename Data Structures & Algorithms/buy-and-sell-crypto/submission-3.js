class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestDay = prices[0]
        let highestProfit = 0

        for (let i = 0; i < prices.length; i++) {
            highestProfit = Math.max(highestProfit, prices[i] - lowestDay)
            lowestDay = Math.min(lowestDay, prices[i])
        }

        return highestProfit
    }
}

// approach
// init lowest day var
// init highest profit var
// iterate through prices
// if the current day has the lowest value set the lowest day var
// if the current day provides the highest profit val set it

// return highest profit var