function cyberReindeer(road, time) {
    // Code here
    let result = []
    let pos = 0;
    let a = '.'
    for(let i = 0; i < time; i++) {
      result.push(road)
      if(i >= 4) {
        road = road.replace(/\|/g, "*");
      }
      if(road[pos + 1] === '.' || road[pos + 1] === '*') {
        road = road.split("")
        road[pos] = a
        a = road[pos + 1]
        road[pos + 1] = 'S'
        road = road.join("")
        pos++
      }
    }
    return result
  }