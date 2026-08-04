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
            if(seen.has(diff)){
                return [seen.get(diff),i];
            }
            seen.set(nums[i],i);
        }
    }
}
