//! task 1

let index = 0;

while (index <= 100) {
  console.log(index);
  index++;
}

//   ! task 2

let counter = 2;

while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

//    ! task 3

let count = 10;
let sum = 1;

while (count <= 0) {
 sum = sum + count
 count++
}
console.log(sum +count);

// task 4

let userName = "Naruto Shipuden  ";
console.log(userName.charAt(0));
let jamNumber = 0;
while (jamNumber <= userName.length) {
 if (userName.charAt(jamNumber) ==="u") {
   console.log("the leter is in "+jamNumber+"index");
 }  
 jamNumber++
}
let Number = prompt("введите код");
for (let kod = 0; kod < Number; kod++) {
 console.log(kod);
}

let line = 7;
let line2 = "";
let line3 = "*";
for (let ts = 0; ts < line; ts++) {
 line2 += line3;
 console.log(line2);
 }
 let wl = "7";
 let res1 = "";
 let res2 = "#";
 let res3 = "0";

 while (wl >= res3) {
   res1 += res2;
   console.log(res1);
   res3++
 }