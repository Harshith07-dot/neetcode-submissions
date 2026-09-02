class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let sym = new Set(['+','-','*','/']);
        let arr = [];
        for(let i=0;i<tokens.length;i++){
            if(!sym.has(tokens[i])){
                arr.push(parseInt(tokens[i]));
            } else {
                let a = arr.pop();
                let b=arr.pop();
                if(tokens[i] === '+'){
                    arr.push(b+a);
                } else if(tokens[i] === '-'){
                    arr.push(b-a);
                } else if(tokens[i] === '*'){
                    arr.push(b*a);
                } else if(tokens[i] === '/'){
                    arr.push(Math.trunc(b/a));
                } 
            }
        }
        return arr[arr.length-1];
    }
}
