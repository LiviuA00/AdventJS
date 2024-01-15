function organizeGifts(gifts) {
    let index = -1
    let result = []
    let num = "";
    let char

    while (gifts.length > 0) {
        for (let i = 0; i < gifts.length; i++) {
            if (isNaN(gifts[i])) {
                index = i
                break;
            }
            num += gifts[i];
        }
        if (index !== -1) {
            char = gifts.slice(index, index + 1)
            gifts = gifts.substring(index + 1);

        }
        let number = parseInt(num);
        console.log("acestea sunt: " + char)
        number = number / 10
        if (number / 5 > 1) {
            let r = number / 5;
            result.push(('[' + char + ']').repeat(r))
        }
        if (number % 5 > 0) {
            result.push(('{' + char + '}').repeat(number % 5))
        }
        if ((number * 10) % 10 > 0) {
            result.push("(" + char.repeat((number * 10) % 10) + ")")
        }

        num = ''

    }
    console.log(gifts)
    result = result.join("")
    return result
}


// Test: 
// organizeGifts("70b120a4c")

// Expected:
// "[b]{b}{b}[a][a]{a}{a}(cccc)"

// Actual:
// "[b]{b}{b}[a][a]{a}{a}(cccc)"

// Test: 
// organizeGifts("19d51e")

// Expected:
// "{d}(ddddddddd)[e](e)"

// Actual:
// "{d}(ddddddddd)[e](e)"