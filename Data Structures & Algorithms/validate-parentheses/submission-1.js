class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let pairs = {
            ')' : '(',
            '}':'{',
            ']':'['
        }
        for(let c of s){
            if(pairs[c]){
                if(stack.length>0 && pairs[c] === stack[stack.length-1])
                {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
