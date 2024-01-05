function findFirstRepeated(gifts) {
    var c;
    var index = gifts.length;
    var compindex;
    var a = 0;
    for (var i = 0; i < gifts.length; i++) {
      for (var b = i + 1; b < gifts.length; b++) {
        if (gifts[i] === gifts[b]) {
          compindex = b;
          if (index > compindex) {
            index = compindex;
            c = gifts[b];
          }
  
          a++;
        }
      }
      //console.log(gifts[i]);
    }
    if (a === 0) {
      return -1;
    } else {
      return c;
    }
  
  }
  