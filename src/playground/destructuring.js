// const person = {
//   name:'Andrew',
//   age: 23,
//   location:{
//     city: 'Filadelphia',
//     temp: 94
//   }
// };
//
// const {name: firstName = 'User', age} = person;
// const{city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}`);
// if(city && temperature){
//   console.log(`its ${temperature} in ${city}`)
// }
// const book={
//   title:'Ego is the enemy',
//   author: 'Ryan Hollyday',
//   publisher:{
//     //name:'Penguin'
//   }
// };
// const {name: publisherName='slef published'}= book.publisher;
// console.log(publisherName); // penguine or self published
const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.99'];
const [coffeeType, ,price] = item;
console.log(`A medium ${coffeeType} costs ${price}`);
