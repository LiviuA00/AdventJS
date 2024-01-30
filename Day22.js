function compile(code) {
  let count = 0;
  let ret = -1;
  for (let i = 0; i < code.length; i++) {
    if (code[i] == "+") {
      count = count + 1;
    }
    if (code[i] == "-") {
      count = count - 1;
    }
    if (code[i] == "*") {
      count = count * 2;
    }
    if (code[i] == "%") {
      ret = i;
    }
    if (ret != -1 && code[i] == "<") {
      i = ret;
      ret = -1;
    }
    if (code[i] === "¿" && count <= 0) {
      i = code.indexOf("?");
    }
  }

  return count;
}

// Test:
// console.log(compile('-+¿+?'))

// Expected:
// 0

// Actual:
// 0

// Test:
// console.log(compile('--¿+++?'))

// Expected:
// -2

// Actual:
// -2
