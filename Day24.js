function getStaircasePaths(steps, maxJump) {
  const result = [];
  function jump(curr, stepsLeft) {
    if (stepsLeft === 0) {
      result.push(curr.slice());
      return;
    }
    for (let i = 1; i <= stepsLeft && i <= maxJump; i++) {
      curr.push(i);
      jump(curr, stepsLeft - i);
      curr.pop();
    }
  }
  jump([], steps);
  return result;
}

// Test:
// console.log(getStaircasePaths(3, 3))

// Expected:
// [
//   [
//     1,
//     1,
//     1
//   ],
//   [
//     1,
//     2
//   ],
//   [
//     2,
//     1
//   ],
//   [
//     3
//   ]
// ]

// Actual:
// [
//   [
//     1,
//     1,
//     1
//   ],
//   [
//     1,
//     2
//   ],
//   [
//     2,
//     1
//   ],
//   [
//     3
//   ]
// ]
