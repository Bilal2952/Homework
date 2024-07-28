// task 1..

const student1 = {
    name:"John",
    lang:"KG",
    age:24
}
delete student1.age;
 const student2 = student1
console.log(student1);


// task 2..
// Примитивный даныйлар memory сохраняется в стеке;
// object Heap, Stack сохраняется в куче;

// task 3..

const array = [1,
     true, 
     3, 
     {Name:"ZH", hobbies: ["swimming", "reading"]},
     5,
     "Hello",
     "Hi"
     ]
console.log(array);
console.log(array[1]);
 console.log(array[4]);
 console.log(array[3]);
array.unshift("Google");
console.log(array);
array.shift("Google")
console.log(array);
array.push("Bilal")
console.log(array);
 array.pop("Bilal")
console.log(array);

let array1 = array.slice(2,3)
console.log(array1);


delete array[5]
console.log(array);

console.log(array.length);


// task 4...

const arr = [1,2,3,"sdf",4,"sdf",{},3, true, 2, [1,6,3],1];

let sum = 0;

for (const value of arr) {
  if (typeof value === 'number') {
    sum += value;
  }
}

console.log(sum);
