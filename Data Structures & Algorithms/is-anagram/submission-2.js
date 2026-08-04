class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let countS = new Map();
        let countT = new Map();
        for(let i=0;i < s.length; i++){
            countS.set(s[i], (countS.get(s[i]) || 0) +1);
            countT.set(t[i], (countT.get(t[i]) || 0) +1);
        }
        for(const [key,value] of countS){
            if(countT.get(key) !== value) return false;
        }
        return true;
    }
}
