// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// };

// for (const iterator of Object.values(numbers)) {

//     if (iterator >= 3){
//         console.log(iterator);
//     }
// }

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);


// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach(item => {
//     item.price *= 0.85
// });

// console.log(products);


// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: ["1.jpg", "2.jpg"],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: ["3.jpg"],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// const x = products.filter(item => {
//     if (item.photos) {
//         if (item.photos.length) {
//             return item;
//         }
//     }
// });

// console.log(x);

// const j = products.sort((a, b) => a.price - b.price);

// console.log(j);

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница",
    "суббота", "воскресенье"];
const united = {};

for (let i = 0; i < en.length; i++) {
    united[en[i]] = ru[i];
}

console.log(united);




