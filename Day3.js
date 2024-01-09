function findNaughtyStep(original, modified) {
    var r = '';
    if(original.length === '') {
      return r;
    }else if(original === modified) {
      return '';
    } 
    var c = 0;
      for(var i = 0; i < Math.max(original.length, modified.length); i++) {
        if(original[i] !== modified[i]) {
          c = i;
          break;
        }
    }
    if(original.length < modified.length) {
      return modified[c];
    }else {
      return original[c];
    }
    //return r;
  }
  
  