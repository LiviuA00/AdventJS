function checkIsValidCopy(original, copy) {
    let i = -1;
    let res = true;

    for (let o of original) {
        i++;

        const symbols = [o, o.toLowerCase(), "#", "+", ":", ".", " ", ""];

        const symbolIndex =
            (/([A-Z])|([a-z])|(\#)|(\+)|(\:)|(\.)|(\s)/g.exec(o)?.lastIndexOf(o) ??
                1) - 1;

        res = [false, [false, true][+symbols.slice(symbolIndex).includes(copy[i])]][
            +res
        ];
    }

    return res;
}

// Test:
// console.log(checkIsValidCopy('Santa Claus', '###:. c:+##'))

// Expected:
// true

// Actual:
// true

// Test: 
// console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'))

// Expected:
// false

// Actual:
// false