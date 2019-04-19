const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

const user = {
  name: 'Laércio',
  cities: ['Boa Vista', 'Campina Grande', 'Chicago'],
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [0, 1, 2, 3, 4, 5],
  multiplyBy: 3,
  multiply () {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

