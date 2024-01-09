function manufacture(gifts, materials) {
  
    var possibleGifts = [];
     
    for(var i = 0; i < gifts.length; i++) {
      var curentGift = gifts[i];
      var t = true;
      var comp = '';
      for(var j = 0; j < curentGift.length; j++){
        if(materials.includes(curentGift[j])){
          console.log("am intrat, e materialul: " + comp);
          //possibleGifts.push(curentGift);
          comp= comp + curentGift[j];
          
        }
      }
      if (comp === curentGift) {
        possibleGifts.push(curentGift);
      }
    }
    console.log("Putem face " + possibleGifts);
    return possibleGifts;
  }