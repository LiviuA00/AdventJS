function maxDistance(movements) {
    // Code here
    let result = 0;
    let left = 0;
    let right = 0;
    let charMoves = movements.split('');
    for(let i = 0; i < charMoves.length; i++) {
      if(charMoves[i] === '<') {
        left++;
      }
      if(charMoves[i] === '>') {
        right++;
      }
    }
    for(let i = 0; i < charMoves.length; i++) {
      if(charMoves[i] === '<') {
        result++;
      }
      if(charMoves[i] === '*' && left > right) {
        result++;
      }
      if(charMoves[i] === '>') {
        result--;
      }
      if(charMoves[i] === '*' && left < right) {
        result--;
      }
      if(charMoves[i] === '*' && left == right) {
        result--;
      }
      
    }
    if(result < 0) {
      result = result*(-1);
    }
    return result;
  }