class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let seen = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    continue;
                }
                if (seen.has(board[i][j])) {
                    return false;
                }
                seen.add(board[i][j]);
            }
        }
        for(let i=0;i<board.length;i++){
            let seen = new Set();
            for(let j=0; j<board[i].length;j++){
                if(board[j][i] ==='.'){
                    continue;
                }
                if(seen.has(board[j][i])){
                    return false;
                }
                seen.add(board[j][i]);
            }
        }
        for(let row=0;row<9;row += 3){
            for(let col=0;col<9;col += 3){
                let seen  = new Set();
                for(let r = row;r<row +3;r++){
                    for(let c=col;c<col +3;c++){
                        if(board[r][c]==='.'){
                            continue;
                        }
                        if(seen.has(board[r][c])){
                            return false;
                        }
                        seen.add(board[r][c]);
                    }
                }
            }
        }
        return true;
    }
}
