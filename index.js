function dwarfRollCall(dwarves) {
  var array = [];
  for(var i=0; i < dwarves.length; i++){
        array.push(`${i+1}. ${dwarves[i]}`)
  }
    return array.join(" ")
}

function summonCaptainPlanet(planeteerCalls){
  var uppercasePlaneteerCalls = [];
  for(var i=0; i < planeteerCalls.length; i++){
    let exclamation = "!"
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${exclamation}`.toUpperCase())
  }
  return uppercasePlaneteerCalls
}

function longPlaneteerCalls(words) {
  for(var i=0; i < words.length; i++){
    if(words.length > 4){
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  for(var i=0; i < foods.length; i++){
    if(foods[i] === 'cheddar'){
      return foods[i]
    }
  }
      return 'no cheese!'
}
