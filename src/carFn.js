// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Mclaren',
  model: 'P1',
  year: '2016',
  color: 'Orange',
  seats: '2',
  previousOwners: [],
  owner: 'manufacturer',
  running: false,
  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },
  paint: function (newColor){
    this.color = newColor
  }

}
module.exports = Car
// console.log(Car.color + 'before');
Car.sell('Dundee')
Car.paint('matte')
// console.log(Car.color + 'after');
var c1 = new Car('Honda', 'Vuzel', 2017, 'red', 7)
// Export the `Car` object
