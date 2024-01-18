function optimizeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = []
    let first = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        const compInterval = intervals[i]
        if (first[1] >= compInterval[0]) {
            first[0] = Math.min(first[0], compInterval[0])
            first[1] = Math.max(first[1], compInterval[1])
        } else {
            result.push(first)
            first = compInterval
        }
    }
    result.push(first)
    result.sort((a, b) => a[0] - b[0]);

    return result
}

// Test: 
// console.log(optimizeIntervals([[1, 15], [8, 12], [4, 7]]))

// Expected:
// [
//   [
//     1,
//     15
//   ]
// ]

// Actual:
// [
//   [
//     1,
//     15
//   ]
// ]

// Test: 
// console.log(optimizeIntervals([[2, 7], [3, 4], [5, 8]]))

// Expected:
// [
//   [
//     2,
//     8
//   ]
// ]

// Actual:
// [
//   [
//     2,
//     8
//   ]
// ]