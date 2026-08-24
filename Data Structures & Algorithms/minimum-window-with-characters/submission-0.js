class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '') return '';
        let tcount = {};
        let window = {};
        for(let char of t){
            tcount[char] = (tcount[char] || 0) + 1;
        }
        let reslength = Infinity;
        let res = [-1,-1];
        let have = 0;
        let need = Object.keys(tcount).length;
        let l=0;
        for(let r=0;r< s.length;r++){
            let c = s[r];
            window[c] = (window[c] || 0) + 1;
            if(tcount[c] && tcount[c] === window[c]){
                have++;
            }
            while(have === need){
                if(r-l+1 < reslength){
                    reslength = r-l+1;
                    res = [l,r];
                }
                window[s[l]]--;
                if(tcount[s[l]] && window[s[l]] < tcount[s[l]]){
                    have--;
                }
                l++;
            }
        }
        return reslength === Infinity? '' : s.substring(res[0],res[1] + 1);
    }
}
