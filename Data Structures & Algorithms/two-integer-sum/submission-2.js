class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = new Map();
        let diff;
        for(let i=0;i<nums.length;i++){
            diff = target - nums[i];
            if(nums.includes(diff) && (nums.indexOf(diff)) != i){
                return [i,nums.indexOf(diff)]
            }
            seen.set(nums[i]);
        }
    }
}
