function solution(board) {
    const size = board.length;
    for(i=0; i<board.length; i++){
        for(j=0; j<board.length; j++){
            if(board[i][j]%2==1){
             if(i>0 && j>0) board[i-1][j-1] += 2;
             if(i>0) board[i-1][j] += 2;
             if(i>0 && j+1<size) board[i-1][j+1] += 2;
             if(j>0) board[i][j-1] += 2;
             if(j+1<size) board[i][j+1] += 2;
             if(i+1<size && j>0) board[i+1][j-1] += 2;
             if(i+1<size) board[i+1][j] += 2;
             if(i+1<size && j+1<size) board[i+1][j+1] += 2;
            }
              }
                }
return board.flat().filter(v=> v == 0).length
}