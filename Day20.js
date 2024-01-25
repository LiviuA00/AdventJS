function distributeGifts(weights) {
    const rows = weights.length;
  const cols = weights[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for(let j = 0; j < cols; j++) {
      let sum = 0;
      let count = 0;

      const add = (value) => {
        sum += value ?? 0;
        count += value ? 1 : 0;
      };

      add(weights[i][j-1]);
      add(weights[i][j+1]);
      add(weights[i - 1]?.[j]);
      add(weights[i + 1]?.[j]);
      add(weights[i][j]);
      result[i][j] = Math.round(sum/count);
    }
  }

  return result;
}

// Test: 
// console.log(distributeGifts([
//     [4, 5, 1],
//     [6, null, 3],
//     [8, null, 4]
//   ]))
  
//   Expected:
//   [
//     [
//       5,
//       3,
//       3
//     ],
//     [
//       6,
//       5,
//       3
//     ],
//     [
//       7,
//       6,
//       4
//     ]
//   ]
  
//   Actual:
//   [
//     [
//       5,
//       3,
//       3
//     ],
//     [
//       6,
//       5,
//       3
//     ],
//     [
//       7,
//       6,
//       4
//     ]
//   ]