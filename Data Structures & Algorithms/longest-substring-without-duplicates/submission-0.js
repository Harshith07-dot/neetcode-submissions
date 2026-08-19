class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set();
        let l = 0;
        let r = 0;
        let max = 0;
        while(r<s.length){
            while(seen.has(s[r])){
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            max = Math.max(max, r-l+1);
            r++;
        }
        return max;
    }
}
