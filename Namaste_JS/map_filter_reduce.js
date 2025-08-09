const users = [
  { fName: "Abhi", lname: "Solanki", age: 20 },
  { fName: "aksay", lname: "Saini", age: 26 },
  { fName: "donald", lname: "trump", age: 70 },
  { fName: "Deepika", lname: "padukone", age: 26 },
];

// Print Names ----------------------------------------- Map

// const output = users.map((x) => x.fName + " "+ x.lname)
// console.log(output);

// print Same age -------------------------------------- Reduce
// {20  2, 26 : 2, 70 : 1}

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);

// Print FName And age is lessThen 30 ----------------------- Filter/Map
// ["Abhi", "aksay", "Deepika"]

// const output = users.filter((x) => x.age < 30).map((x) => x.fName + " " +  x.age);
// console.log(output);

// Task --------------------------------------------------- Reduce

const output = users.reduce(function (acc, curr) {
  if (acc[curr.fName]) {
    acc[curr.fName] = ++acc[curr.fName];
  }
  return acc;
});

console.log(output);
