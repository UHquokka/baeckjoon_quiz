function solution(keyinput, board) {
    const direc = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
   const move = [0, 0];
    keyinput.forEach(d=> {
       if(d == 'up' && move[1] <direc[1]){
            move[1] += 1
       }
        if(d == 'down' && move[1] > -direc[1]){
          move[1] -= 1
       }
        if(d == 'left' && move[0] > -direc[0]){
          move[0] -= 1
       }
        if(d == 'right' && move[0] < direc[0]){
           move[0] += 1
       }
   })
    return move
}