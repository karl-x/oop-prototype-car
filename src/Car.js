// Phase II here, don't require this file until you're done with Phase I
"use strict"
class Car {
  constructor (make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = passengers
    //if passenger argument is undefined, set it to []
    if (!this.passengers) {
      this.passengers = []
    }
  }

  sell (newOwner) {
    var checkOwner = parseInt(newOwner)

    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }
  paint (newColor) {
    var input = newColor
    if(typeof input === 'string') {
    this.color = newColor
    }
  }
  start () {
    this.running = true
  }

  off () {
    this.running = false
  }
  driveTo (destination) {
    if (this.running === true) {
      console.log('driving to ' + destination)
      return true
    } else {
      return false
    }
  }
  park () {
    if (this.running === false) {
      console.log('parked!!')
      return true
    } else {
      return false
    }
  }
  pickUp (name) {
    var start = (this.running === true)
    var availableSeats = this.seats -1
    var currentPax = this.passengers.length
    if (start && currentPax < availableSeats) {
      console.log('driving to pick up ' + name)
      this.passengers.push(name)
      return true
    } else {
      return false
    }
  }
  dropOff (name) {
    var start = (this.running === true)
    var paxExists = (this.passengers.includes(name) === true)
    var removed = this.passengers.indexOf(name)
    if (start && paxExists) {
      console.log('driving to drop off ' + name)
      this.passengers.splice(removed, 1)
      return true
    } else {
      return false
    }
  }



  passengerCount () {
    return this.passengers.length
  }
}

module.exports = Car
