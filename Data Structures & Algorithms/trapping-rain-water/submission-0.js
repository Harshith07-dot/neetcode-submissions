class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (!height || height.length === 0) {
            return 0;
        }
        let i=0;
        let j=height.length-1;
        let leftmax=height[i];
        let rightmax = height[j];
        let cap=0;
        while(i<j){
            if(leftmax<rightmax){
                i++;
                leftmax = Math.max(leftmax,height[i]);
                cap += leftmax - height[i];
            } else {
                j--;
                rightmax = Math.max(rightmax,height[j]);
                cap += rightmax-height[j];
            }
        }
        return cap;
    }
}
