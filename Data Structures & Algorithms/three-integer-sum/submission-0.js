class Solution {
    /**
     * @param {number[]} sorted
     * @return {number[][]}
     */
    threeSum(nums) {
        let sorted = nums.sort((a,b) => a-b);
        let res = [];
        for(let i=0;i<sorted.length;i++){
            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }
            let left=i+1;
            let right=sorted.length-1;
            while(left<right){
                let sum = sorted[i]+sorted[left]+sorted[right];
                if(sum < 0){
                    left++;
                } else if(sum>0){
                    right--;
                } else {
                    res.push([sorted[i], sorted[left], sorted[right]]);

                    left++;
                    right--;

                    while (left < right && sorted[left] === sorted[left - 1]) {
                        left++;
                    }

                    while (left < right && sorted[right] === sorted[right + 1]) {
                        right--;
                    }
                }
            }
        }
        return res;
    }
}
