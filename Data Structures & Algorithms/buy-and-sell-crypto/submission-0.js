class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        for(let i =0;i<prices.length-1;i++){
            for(let j=i+1;j<prices.length;j++){
                let diff = prices[j] - prices[i];
                if(res < diff){
                    res = diff;
                } 
            }
        }
        return res;
    }
}
