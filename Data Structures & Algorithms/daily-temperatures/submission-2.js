class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n=temperatures.length;
        let res = new Array(n).fill(0);
        for(let i=n-2;i>=0;i--){
            let j=i+1;
            while(j<n && temperatures[j] <= temperatures[i]){
                if(res[j] === 0){
                    j=n;
                    break;
                }
                j += res[j];
            }
            if(j<n){
                res[i] = j-i;
            }
        }
        return res;
    }
}
