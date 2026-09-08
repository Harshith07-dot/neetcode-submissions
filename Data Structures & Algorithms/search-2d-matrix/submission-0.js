class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rl = matrix.length;
        let cl = matrix[0].length;
        let l=0;
        let r = rl*cl-1;
        while(l<=r){
            let mid = l + Math.floor((r-l)/2);
            let row = Math.floor(mid/cl);
            let col = mid%cl;
            if(target > matrix[row][col]){
                l=mid+1;
            } else if (target < matrix[row][col]){
                r=mid-1;
            } else {
                return true;
            }
        }
        return false;
    }
}
