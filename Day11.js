function getIndexsForPalindrome(word) {
    result = []
    let comp = ''
    for (let i = 0; i < word.length; i++) {
        comp = comp + word[word.length - i - 1]
    }
    if (comp === word) {
        return result
    }
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            let arrayText = word.split('');
            let temp = arrayText[j];
            arrayText[j] = arrayText[i];
            arrayText[i] = temp;
            let newText = arrayText.join('');
            let comp = newText.split("").reverse().join("");
            if (newText === comp) {
                result.push(i)
                result.push(j)
                return result
            }
        }
    }
    if (comp !== word) {
        return null
    }
}

// Test:
// getIndexsForPalindrome('caababa')

// Expected:
// null

// Actual:
// null

// Test: 
// getIndexsForPalindrome('aaababa')

// Expected:
// [
//   1,
//   3
// ]

// Actual:
// [
//   1,
//   3
// ]

// Test: 
// getIndexsForPalindrome('aaaaaaaa')

// Expected:
// []

// Actual:
// []