function revealSabotage(store) {
    const rows = store.length;
    const cols = store[0].length;
    function isValidCell(row, col) {
        return row >= 0 && row < rows && col >= 0 && col < cols;
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (store[row][col] === '*') {
                continue;
            }
            let count = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    const newRow = row + i;
                    const newCol = col + j;
                    if (isValidCell(newRow, newCol) && store[newRow][newCol] === '*') {
                        count++;
                    }
                }
            }
            if (count === 0) {
                store[row][col] = ' ';
            } else {
                store[row][col] = count.toString();
            }
        }
    }
    return store;
}

// Test: 
// console.log(revealSabotage([
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', ' ']
//   ]))
  
//   Expected:
//   [
//     [
//       "1",
//       "1",
//       "1"
//     ],
//     [
//       "1",
//       "*",
//       "1"
//     ],
//     [
//       "1",
//       "1",
//       "1"
//     ]
//   ]
  
//   Actual:
//   [
//     [
//       "1",
//       "1",
//       "1"
//     ],
//     [
//       "1",
//       "*",
//       "1"
//     ],
//     [
//       "1",
//       "1",
//       "1"
//     ]
//   ]