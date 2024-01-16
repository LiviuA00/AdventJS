function autonomousDrive(store, movements) {
    let initialRow, initialCol;
    for (let i = 0; i < store.length; i++) {
        const colIndex = store[i].indexOf('!');
        if (colIndex !== -1) {
            initialRow = i;
            initialCol = colIndex;
            break;
        }
    }
    for (let i = 0; i < movements.length; i++) {
        const move = movements[i];
        let newRow = initialRow;
        let newCol = initialCol;

        if (move === 'R') {
            newCol++;
        } else if (move === 'L') {
            newCol--;
        } else if (move === 'U') {
            newRow--;
        } else if (move === 'D') {
            newRow++;
        }
        if (
            newRow >= 0 &&
            newRow < store.length &&
            newCol >= 0 &&
            newCol < store[0].length &&
            store[newRow][newCol] !== '*'
        ) {
            const currentRow = store[initialRow].split('');
            currentRow[initialCol] = '.';
            store[initialRow] = currentRow.join('');

            initialRow = newRow;
            initialCol = newCol;

            const newRowArray = store[initialRow].split('');
            newRowArray[initialCol] = '!';
            store[initialRow] = newRowArray.join('');
        }
    }

    return store;
}

// Test: 
// console.log(autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L']))

// Expected:
// [
//   "***",
//   "*!*",
//   "***"
// ]

// Actual:
// [
//   "***",
//   "*!*",
//   "***"
// ]

// Test:
// console.log(autonomousDrive(
//     [
//         '.**.*.*.',
//         '.***....',
//         '..!.....'
//     ], ['D', 'U', 'R', 'R', 'R']))

// Expected:
// [
//     ".**.*.*.",
//     ".***....",
//     ".....!.."
// ]

// Actual:
// [
//     ".**.*.*.",
//     ".***....",
//     ".....!.."
// ]