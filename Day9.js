function adjustLights(lights) {
    let result = 0
    for (let i = 0; i < lights.length - 1; i++) {
        if (lights[i] === lights[i + 1]) {
            if (lights[i] === '🔴') {
                lights[i + 1] = '🟢';
            } else {
                lights[i + 1] = '🔴';
            }
            result++
        }

    }

    return Math.min(result, lights.length - result);
}

// Test:
// adjustLights(["🔴", "🔴", "🔴"])

// Expected:
// 1

// Actual:
// 1

// Test: 
// adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])

// Expected:
// 2

// Actual:
// 2