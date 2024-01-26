function findBalancedSegment(message) {
    const maxNumberOfOccurrences = Math.round(message / 4)
    const arrSize = message.length

    let result = []
    let longest = 0
    for (let i = 0; i < arrSize; i++) {
        let countI = 0
        let countO = 0
        for (let j = i; j < arrSize; j++) {
            if (message[j] === 1) {
                countI++
            } else {
                countO++
            }
            if (countI > maxNumberOfOccurrences || countO > maxNumberOfOccurrences) {
                continue
            }
            if (countI === countO && longest < j - i + 1) {
                longest = j - i + 1
                result = [i, j]
            }
        }
    }
    return result
}

// Test:
// console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))

// Expected:
// [
//     2,
//     5
// ]

// Actual:
// [
//     2,
//     5
// ]

// Test: 
// console.log(findBalancedSegment([1, 1, 0, 1, 0, 1]))

// Expected:
// [
//   1,
//   4
// ]

// Actual:
// [
//   1,
//   4
// ]