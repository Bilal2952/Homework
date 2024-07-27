// task 1 !

// let createStudentName = {
//     name:"Bilal",
//     surname:"Gyazitdiniv",
//     Age:15,
//     faculty:"CS",
//     university:"ALOTOO",
//     gpa:87,
// }
// console.log(createStudentName);

// task 2 !

// let createStudentName = {
//     name:"Bilal",
//     surname:"Gyazitdiniv",
//     Age:15,
//     faculty:"CS",
//     university:"ALOTOO",
//     gpa:87,
// }
// console.log(delete createStudentName.faculty);
// console.log(createStudentName);

// task 3 !

// let peaksoftFullPassword = {
//     email: "admin123@gmail.com",
//     password: "admin123",
//     age: 16,
//     city:"Moscow",
// }
// let getProperty = prompt("Enter your email...!");
// let getPassword = prompt("Enter your password...!")
// let GetNumber = prompt("2 + 3..?")
// if ( getProperty in peaksoftFullPassword) {
//     console.log(getProperty);
// }
//     else {
//         alert("Извините, такого email не существует");
//     }

//      if(getPassword in peaksoftFullPassword.password) {
//         console.log(peaksoftFullPassword.password);
//     }
//     else {
//         console.log("Неверный пароль... ");
//     }

//     if (GetNumber === ) {
        
//     }





 let peaksoftFullPassword = {
     email: "admin123@gmail.com",
     password: "admin123",
     age: 16,
     city:"Moscow",
     sum:5,
 }
let point = 0;
let answer = "";
answer = prompt("Enter your email...!");
if (answer == "admin123@gmail.com"){
    console.log();
    point = point + 1; 
}else{
    alert("Неверно ввели почту!");
}

answer = prompt("Enter your password...!");
if (answer == "admin123"){
    console.log(answer);
    point = point + 1;  point++ }else{
    alert("Неверно  ввели пароль!");
}
answer = prompt("2+3=?")
if (answer == "5") {
    alert("Верно!ваша премия-" + peaksoftFullPassword.sum);
}
else{
    alert("Поздравлю вы самый умный человек")
}
