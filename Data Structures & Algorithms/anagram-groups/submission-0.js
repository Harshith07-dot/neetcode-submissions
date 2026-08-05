class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = new Map();
        for(const word of strs){
            let count = new Array(26).fill(0);
            for(let ch of word){
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = count.join(",");
            if(!groups.has(key)){
                groups.set(key,[]);
            }

            groups.get(key).push(word);
        }
        return Array.from(groups.values());

    }
}
