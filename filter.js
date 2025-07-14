const myNums = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];

// const newnum = myNums.filter((num) => {
//     return num > 4
// })

// const newnum = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newnum.push(num)

//     }
// });

// console.log(newnum);

const books = [
  {
    title: "book one ",
    genre: "fiction",
    publish: 1981,
    edtion: 2004,
  },
  {
    title: "book two ",
    genre: "non-fiction",
    publish: 1985,
    edtion: 2005,
  },
  {
    title: "book three ",
    genre: "history",
    publish: 1984,
    edtion: 2020,
  },
  {
    title: "book four ",
    genre: "science",
    publish: 2008,
    edtion: 2022,
  },
  {
    title: "book five ",
    genre: "history",
    publish: 1999,
    edtion: 2024,
  },
  {
    title: "book six ",
    genre: "Java",
    publish: 1988,
    edtion: 2025,
  },
  {
    title: "book sevan ",
    genre: "science",
    publish: 2001,
    edtion: 2023,
  },
  {
    title: "book eight ",
    genre: "history",
    publish: 1999,
    edtion: 2004,
  },
  {
    title: "book nine ",
    genre: "java",
    publish: 1985,
    edtion: 2004,
  },
  {
    title: "book ten ",
    genre: "Java Script",
    publish: 1981,
    edtion: 20025,
  },
];
let userbook = books.filter((bk) => bk.genre === "history");
userbook = books.filter((bk) => {
  return bk.publish >= 1998 && bk.genre === "history" 
});
console.log(userbook);
