class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        let n=heights.length;
        for(let i=0;i<=n;i++){
            while(stack.length && (i===n || 
            heights[stack[stack.length-1]] >= heights[i])){
                let h= heights[stack.pop()];
                let w = stack.length === 0? i :
                i- stack[stack.length-1] -1;
                maxArea = Math.max(maxArea, h*w);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
