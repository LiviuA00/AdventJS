function travelDistance(map) {
  const mapArr = map.split("\n");
  let kidOrder = 1;
  let santaX,
    santaY,
    distance = 0;
  for (let i = 0; i < mapArr.length; i++) {
    if (mapArr[i].includes("S")) {
      santaX = mapArr[i].indexOf("S") + 1;
      santaY = i + 1;
      break;
    }
  }
  for (let i = 0; i < mapArr[0].length; i++) {
    for (let j = 0; j < mapArr.length; j++) {
      if (mapArr[j].includes(kidOrder)) {
        const kidX = mapArr[j].indexOf(kidOrder) + 1;
        if (santaY !== j + 1 || santaX !== kidX) {
          distance += +Math.abs(j + 1 - santaY) + Math.abs(kidX - santaX);
          santaY = j + 1;
          santaX = kidX;
        }
        kidOrder++;
      }
    }
  }
  return distance;
}

//Test:
// console.log(
//   travelDistance(
//     `3....1....
//     ..S.......
//     .........2
//     ..........
//     ......4...`
//   )
// );

// Expected: 31;

// Actual: 31;
