//  task 1...

 const array1 = [1,2,3,4,5];
 const map1 = array1.map((x) => x ** 2);
 console.log(map1);

// // task 2...

const usersName = [ 
  { firstName: "John", lastName: "Obama", age: 34, gender:"Male"},
  {firstName: "Ariana", lastName: "Grande", age: 22, gender: "female"},
  {firstName: "Naruto", lastName: "Uzumaki", age:19, gender: "male"},
  {firstName: "Cristiano",lastName: "Ronaldo", age:38, gender: "male"},
];

const resultMap = usersName.map((element) =>{
  return {
    fullName: element.firstName + ' '   + element.lastName +' ' + element.age + ' '  + element.gender
  }
});
console.log(resultMap);

// task3...
   let Numbers = [1,2,3,4,5,4, 8,34,3,6];
   let ChetNumbers = Numbers
   .filter((element) => element % 2 === 0)
  console.log(ChetNumbers);

// task 4...

const users = [ 
  { firstName: "John", lastName: "Obama", age: 34, gender:"Male"},
  {firstName: "Ariana", lastName: "Grande", age: 22, gender: "female"},
  {firstName: "Naruto", lastName: "Uzumaki", age:19, gender: "male"},
  {firstName: "Cristiano",lastName: "Ronaldo", age:38, gender: "male"},
]
 
//  // task5...
  const reduceNumb = [1, 2, 3, 4 ,5,4, 8,34,3,6];


 
  const initialValue = 0;
  const sumWithInitial = reduceNumb.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
 
  console.log(sumWithInitial);

// //  task6...
 const foreNumbers = [1,2,3,4,5,4,8,34,3,6];
 var sum = 0;
 let noChetNumbers = foreNumbers
   .filter((element) => element % 2 !== 0)
 noChetNumbers.forEach(function(num) {
     sum += num;
 });
 console.log(sum);
// task 7...

const findUsers = [ 
  { firstName: "John", lastName: "Obama", age: 34, gender:"Male"},
  {firstName: "Ariana", lastName: "Grande", age: 22, gender: "female"},
  {firstName: "Naruto", lastName: "Uzumaki", age:19, gender: "male"},
  {firstName: "Kakashi",lastName: "Hatake", age:28, gender: "male"},
  {firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
]
console.log(findUsers.findIndex(user => user.firstName == 'Naruto'))
 
// task 8...

const numbers = [ 1,2,3,4,5,4,8,34,3,6,];
const largeNumber = (element) => element > 34;

console.log(numbers.findIndex(largeNumber));
