// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// // //// TEST PHASE III /////////////////////////////////////////
// // load the Car object for
var Car = require('../src/Car')
// // update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)

// // starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
success()

// // normal case: test sell
console.log('Testing selling a car')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner didn\'t update to newOwner')
success()

// // error case: test sell to non-string argument
console.log('Testing selling a car to non-string')
honda.sell('0123')
assert.strictEqual(honda.owner, 'Lenny', 'Owner should stay if newOwner is non-string like')
success()

// // normal case: test sell update the previousOwners
console.log('Testing previousOwners after selling')
honda.sell('Shimei')
var lastPrevOwner = honda.previousOwners[ honda.previousOwners.length - 1 ]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be two prevOwner after two successful selling')
success()

// // normal case: testing color
console.log('Testing color change')
honda.paint('Red')
assert.strictEqual(honda.color, 'Red', 'Color didn\'t update to paint')
success()

// c1.paint(false) - should return ==='car can only be painted with real color, please input a string'
// // error case: testing color change to non-existent color
console.log('Testing paint car to non-string')
honda.paint(false)
assert.strictEqual(honda.color, 'Red', 'ar can only be painted with real color, please input a string')
success()

// // Phase IV ================================

// car.start() - should change the running value of the car to true
// normal case: car.running === true
console.log('Testing car start')
honda.start()
assert.strictEqual(honda.driveTo('G'), true, 'Car should run after start')
success()

// car.off() - should change the running value to false
// normal case: car.running === false
console.log('Testing car off')
honda.off()
assert.strictEqual(honda.running, false, 'Car should not run after off')
success()

// car.driveTo(destination) - should log "driving to <destination>", but only if the car is running. Should return true if successful, else false.
// normal case: should only log if car.running === true
console.log('Testing drive + car status')
honda.start()
assert.ok(honda.driveTo('supermassive blackhole'), true, 'Car should be able to drive to destination after start, and return true')
success()

// car.park() - only logs parked if the car is !running
// normal case: should only log 'parked!' if car.running === false
console.log('Testing car parked status')
honda.off()
assert.strictEqual(honda.park(), true, 'Car should not be able to park will running')
success()

// Phase VI =========================================
// car.pickUp(name) - take name and log 'driving to pick up <name>', but only if car is running and seats available. Updates passengers array to include new passenger, needs to be pushed to end of array. Returns true on success, false otherwise.
// normal case:
console.log('Testing passenger pickup')
honda.start()
assert.strictEqual(honda.pickUp('McGregor'), true, 'Car will be able to pick up if it is running and seats are available')
success()


console.log('Testing seat capacity')
honda.start()
honda.pickUp('St-Pierre')
honda.pickUp('Randy Couture')
honda.pickUp('Pacquiao')
honda.pickUp('Tyson')
assert.strictEqual(honda.pickUp('Mayweather'), true, 'Car is full cannot pick up anymore passengers')
success()


console.log('Testing passenger drop off')
honda.start()
var name = 'Mcgregor'
assert.strictEqual(honda.dropOff(name), true, 'Car will be able to pick up if it is running and seats are available')
assert.strictEqual(honda.passengers.includes(name), false, 'Car will be able to pick up if it is running and seats are available')
success()

console.log('Testing passengers remaining')
assert.strictEqual(honda.passengerCount(), 'You have only dropped 2 passengers')
success()
console.log(honda.passengerCount)
