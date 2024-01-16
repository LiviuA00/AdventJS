function calculateTime(deliveries) {
    let totalSeconds = 0;

    for (let i = 0; i < deliveries.length; i++) {
        const duration = deliveries[i].split(':');
        const h = parseInt(duration[0]);
        const m = parseInt(duration[1]);
        const s = parseInt(duration[2]);
        totalSeconds += h * 3600 + m * 60 + s;
    }

    const remTime = Math.abs(7 * 3600 - totalSeconds)
    const remH = Math.floor((remTime / 3600))
    const remM = Math.floor((remTime % 3600) / 60)
    let remS = Math.floor(remTime % 60)
    let remSs = String(remS)
    let remHs = String(remH)
    let remMs = String(remM)
    if (remS < 10) {
        remSs = remSs.padStart(2, '0')
    }
    if (remH < 10) {
        remHs = remHs.padStart(2, '0')
    }
    if (remM < 10) {
        remMs = remMs.padStart(2, '0')
    }
    const result = remHs + ':' + remMs + ':' + remSs
    if (totalSeconds < 7 * 3600) {
        return "-" + result
    } else {
        return result
    }
}

// Test:
// console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']))

// Expected:
// "-00:00:01"

// Actual:
// "-00:00:01"

// Test: 
// console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01']))

// Expected:
// "05:02:01"

// Actual:
// "05:02:01"