class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const countS = new Map();
    const countT = new Map();

    for (let i = 0; i < s.length; i++) {
        countS.set(s[i], (countS.get(s[i]) || 0) + 1);
        countT.set(t[i], (countT.get(t[i]) || 0) + 1);
    }

    for (const [key, val] of countS) {
        if (countT.get(key) !== val) return false;
    }

    return true;
}
}
