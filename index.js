function produceDrivingRange(range){
  return function(blockRangeA, blockRangeB){
    const a = parseInt(blockRangeA)
    const b = parseInt(blockRangeB)

    let c = a > b ? (a - b) : (b - a);

    if(c >= range){
      let d = c - range
      return(`${d} blocks out of range`)
    } else {
      let d = range - c
      return(`within range by ${d}`)
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent
  }
}

function createDriver(){
  let driverId = 1

  return class {
    constructor(name){
      this.id = driverId++
      this.name = name
    }
  }
}
