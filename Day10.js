function createChristmasTree(ornaments, height) {
    let result = [];
    let ornamentIndex = 0;
  
    for (let i = 0; i < height; i++) {
      let spaces = " ".repeat(height - i -1);
      let ornamentLine = "";
  
      for (let j = 0; j <= i; j++) {
        ornamentLine += ornaments[ornamentIndex];
        if (j < i) {
          ornamentLine += " ";
        }
        if (ornamentIndex + 1 === ornaments.length) {
          ornamentIndex = 0;
        } else {
          ornamentIndex = ornamentIndex + 1;
        }
      }
  
      result.push(spaces + ornamentLine);
    }
  
    
    let treeLegSpace = " ".repeat(height - 1);
    result.push(treeLegSpace + "|");
  
    return result.join('\n') + "\n";
  }

  
//   Test: 
//   createChristmasTree("*@o", 3)

// Expected:
// "  *
//  @ o
// * @ o
//   |
// "

// Actual:
// "  *
//  @ o
// * @ o
//   |
// "