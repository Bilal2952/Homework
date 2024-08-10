// // task 1...

// const computers = [  
//   {
//     title: "Macbook Air M1",
//     price: 85000,
//   },
//   {
//     title:"Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus Zenbook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: 'Mackbook Pro',
//     price: 100000,
//   },
// ];
// let ascending = [...computers].sort((a,b) => a.price - b.price);
// let descendiing = [...computers].sort((a,b) => b.price - a.price); 
// console.log(descendiing);
// console.log(ascending);

// //! task 2...

// const grades = [4,4,4,5,3,5,3,5,3,3,2,5,1];
// let results = grades.sort((a,b) => a - b);
// let res = grades.sort((a,b) => b - a);
// console.log(results);
// console.log(res);

// // task 3...

// const fruits = ["strawbery", "mango", "watermelon", "ggrapes", "lemon", "kiwi"];
// let ASCending = fruits.sort(function(a, b) {
//   if (a < b) {
//     return 1;
//   }
//   if(b > a){
//     return -1;
//   }
//   return 0;
// });
// console.log(ASCending);
//  let Descendiing = fruits.sort(function(a, b) {
//   if (a > b) {
//     return -1;
//   }
//   if(b < a){
//     return 1;
//   }
//   return 0;
// });
// console.log(Descendiing);

// // task 4...

// const numbers = [4, 123, -5, 6,100];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

// // task 5...
// //  1
// const fullDate = (Date) => {
//   const day = Date.getDay();
//   const month = `${Date.getMonth() + 1}`.padStart(2, "0");
//   const year = Date.getFullYear();
//   return `0${day}:${month}:${year} `
// }
// const result = fullDate(new Date());
// console.log(result);
//  2
// const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// if (hours > 10){
//   const time = "0" + ":" + minutes + ":" + seconds;
//   console.log(time);
// }  else if (minutes < 10) {
//   const time1 = hours + ":" + "0" + minutes + ":" + seconds;
//   console.log(time1);
// }else if (seconds < 10) {
//   const time2 = hours + ":"  + minutes + ":" +  ":" + seconds;
//   console.log(time2);
// }else if (hours < 10  && minutes < 0) {
//   const time3 = "0" + hours + ":" + "0" + minutes + ":" + seconds;
//   console.log(time3);
// }else if (hours < 10 && minutes < 10 && seconds < 10) {
//   const time4 = "0" +  hours + ":" + "0" + minutes + ":" + "0" + seconds;
//   console.log(time4);
// }else {
//   const time5 = hours + ":" + minutes + ":" + seconds;
//   console.log(time5);
// }

// task 6

// const instagramUser = {
//   userName: "Uzumaki123",
//   email: " user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://wallpapercrafter.com/desktop1/631973-Movies-Avatar-avatar-movie-jake-sully-headshot.jpg",
//   followers: '1m',
//   follwing: 512,
//   title: 'Never Give up',
// };
// for (const kye in instagramUser){
//   console.log(kye)
// }
// for (const value in instagramUser){
//   console.log(instagramUser[value]);
// }

// task 7

//  const computers = [  
//    {
//      title: "Macbook Air M1",
//      price: 85000,
//    },
//    {
//      title:"Dell",
//      price: 65000,
//    },
//    {
//      title: "Asus Zenbook",
//      price: 40000,
//    },
//    {
//      title: "Acer Aspire",
//      price: 45000,
//    },
//    {
//      title: 'Mackbook Pro',
//      price: 100000,
//    },
//  ];
//  let sum = 0;
//  for(const object of computers){
//   sum += object.price;
//  }
//  console.log(sum);
 
// task 8

//   const instagramUser = {
//    userName: "Uzumaki123",
//    email: " user@gmail.com",  
//     password: "123123",
//    avatarUrl: "https://wallpapercrafter.com/desktop1/631973-Movies-Avatar-avatar-movie-jake-sully-headshot.jpg",
//    followers: '1m',
//    follwing: 512,
//    title: 'Never Give up',
//  };
//  const objectLength = Object.keys(instagramUser);
//  for (let i = 0; i < objectLength.length; i++) {
//   console.log(objectLength[i]); 
//  }
//   const values =  Object.keys(instagramUser);
//   let index = 0;
//   while (index < values.length) {
//     const element = instagramUser[values[index]];
//     console.log(element);
//     index++;
//   }

//   for(const [key, values] of Object.entries(instagramUser)) {
//     const item = key + ":" + values;
//     console.log(item);
//   }