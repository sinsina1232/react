//argument function no longer bound with arrow function

const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(1,3, 1002));
const  user = {
  name: 'Androw',
  cities: ['New York', 'Washington', 'Doublin'],
  printLivedCities(){
  return  this.cities.map((city) => this.name + 'has lived in ' + city);
  }
};//userend
user.printLivedCities().forEach((citylived) => console.log(citylived));

const multiplier = {
  //numbers: array of numbers
  //multiplyBy simpler number multiplier single number
  // multiply retutns a new array where the numbers have been multiplied
  numbers: [3, 2, 1],
  multiplyBy: 4,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
