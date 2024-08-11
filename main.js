// task 1

// const posts = {
//     name: "posts",
//     isLoading: true,

//     byId: {
//         post1: {
//             id:"post1",
//             author: "user1",
//             body: "......",
//             comments: ["comment1", "comment2"],
//         },
//         post2: {
//             id: "post2",
//             author: "user2",
//             body: "......",
//             comments: ["comment3", "comment4","comment5"],
//         },
//     },
//     allIds: ["post1", "post2"],
// };
//  spread copy


// console.log(posts);
// const { name, isLoading, ...posts2} = posts
// console.log(posts);

// shallow copy


// console.log(posts);
// const newCopy = Object.assign({},posts);
// console.log(newCopy);

// task 2
// deep copy

// const copyDeep = JSON.parse(JSON.stringify(posts));
// console.log(posts);

// console.log(copyDeep);

// task 3

// const post = {

//     name: "posts",
//     id: "post1",
//     author:"user1",
//     body: "......",
//     comments: ["comment1", "comment2"],
// };

// const {comments:color,hello, ...rest} = post;
// console.log(post);
// color барабар = author;
// hello барабар = body;
// rest барабар =  все остальные 

// task 4

const comments = ["comment3", "comment4", "comment5", "comment1"]

// const [undefined, comment1, ...rest] = comments
// console.log(undefined);
