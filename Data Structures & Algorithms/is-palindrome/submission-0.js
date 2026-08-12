class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const s1 = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let i = 0;
        let j=s1.length-1;
        while(i<j){
            if(s1[i] === s1[j]){
                i++;
                j--
            } else{
                return false;
            }
        }
        return true;
    }
}
