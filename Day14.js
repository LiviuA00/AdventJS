function maxGifts(houses) {
    let incl = houses[0]
    let excl = 0
    for (let i = 1; i < houses.length; i++) {
        let temp = incl
        incl = Math.max(incl, excl + houses[i])
        excl = temp
    }
    return incl
}

// Test:
// console.log(maxGifts([2, 7, 9, 3, 1]))

// Expected:
// 12

// Actual:
// 12

// Test: 
// console.log(maxGifts([1, 2, 3, 1]))

// Expected:
// 4

// Actual:
// 4