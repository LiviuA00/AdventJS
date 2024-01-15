function drawGift(size, symbol) {


    let matSize = size * 2 - 1;
    let firstDiez = matSize - 1;
    let lastDiez = firstDiez - size + 1;
    let sld = lastDiez + size;
    let sfd = firstDiez + size;
  
    let matrix = [];
    for (let i = 0; i < matSize; i++) {
      matrix[i] = [];
      for (let j = 0; j < matSize; j++) {
        matrix[i][j] = symbol;
      }
    }
    for (let i = 0; i <= matSize - 1; i++) {
      for (let j = matSize - 1; j >= 0; j--) {
        if (j == matSize - 1 && i <= matSize / 2) {
          matrix[i][j] = "#";
        }
        if (j == firstDiez && i < matSize / 2) {
          matrix[i][j] = "#";
        }
        if (j == lastDiez) {
          matrix[i][j] = "#";
        }
        if (j < lastDiez) {
          matrix[i][j] = " ";
        }
        if (i == 0 && j > lastDiez) {
          matrix[i][j] = "#";
        }
        if (i == size - 1 && j < firstDiez) {
          matrix[i][j] = "#";
        }
        if (i > matSize / 2 && j == 0) {
          matrix[i][j] = "#";
        }
  
        if (i > matSize / 2 && j == size - 1) {
          matrix[i][j] = "#";
        }
        if (j == sfd - 1 && i >= size) {
          matrix[i][j] = "#";
        }
        if (i == matSize - 1 && j < size - 1) {
          matrix[i][j] = "#";
        }
        if (j >= sfd) {
          matrix[i][j] = undefined;
        }
      }
      firstDiez--;
      lastDiez--;
      sld++;
      sfd--;
    }
    return matrix.map(row => row.filter(char => char != undefined).join('')).join('\n') + '\n'
  }


//    drawGift(10, "%")

// Expected:
// "         ##########
//         #%%%%%%%%##
//        #%%%%%%%%#%#
//       #%%%%%%%%#%%#
//      #%%%%%%%%#%%%#
//     #%%%%%%%%#%%%%#
//    #%%%%%%%%#%%%%%#
//   #%%%%%%%%#%%%%%%#
//  #%%%%%%%%#%%%%%%%#
// ##########%%%%%%%%#
// #%%%%%%%%#%%%%%%%#
// #%%%%%%%%#%%%%%%#
// #%%%%%%%%#%%%%%#
// #%%%%%%%%#%%%%#
// #%%%%%%%%#%%%#
// #%%%%%%%%#%%#
// #%%%%%%%%#%#
// #%%%%%%%%##
// ##########
// "

// Actual:
// "         ##########
//         #%%%%%%%%##
//        #%%%%%%%%#%#
//       #%%%%%%%%#%%#
//      #%%%%%%%%#%%%#
//     #%%%%%%%%#%%%%#
//    #%%%%%%%%#%%%%%#
//   #%%%%%%%%#%%%%%%#
//  #%%%%%%%%#%%%%%%%#
// ##########%%%%%%%%#
// #%%%%%%%%#%%%%%%%#
// #%%%%%%%%#%%%%%%#
// #%%%%%%%%#%%%%%#
// #%%%%%%%%#%%%%#
// #%%%%%%%%#%%%#
// #%%%%%%%%#%%#
// #%%%%%%%%#%#
// #%%%%%%%%##
// ##########
// "