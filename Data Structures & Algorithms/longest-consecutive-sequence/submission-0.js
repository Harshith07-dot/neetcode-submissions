class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let longest = 0;
        for(let i=0;i<nums.length;i++){
            if(!seen.has(nums[i]-1)){
                let count =1;
                let current = nums[i];
                while(seen.has(current+1)){
                    count++;
                    current++;
                }
                if(longest < count){
                    longest=count;
                }
            }
        }
        return longest;
    }
}
