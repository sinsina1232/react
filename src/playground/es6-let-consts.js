var nameVar = 'Sina';
var nameVar = 'Ali';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
 nameLet = 'Sina';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//block scoping
const fullName = 'Jane Mead';
let firstName;
if(fullName) {
   firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);
