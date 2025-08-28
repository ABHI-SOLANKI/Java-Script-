//  map,filter, and reduce - O/P based Questions

// 1-Return only name of student in Capital

// let students = [
//   { name: "abhi", rollNo: 311, mark: 99 },
//   { name: "Dipak", rollNo: 312, mark: 69 },
//   { name: "jayesh", rollNo: 313, mark: 35 },
//   { name: "Ronak", rollNo: 314, mark: 55 },
// ];

// const name = students.map((stu)=> stu.name.toUpperCase())
// console.log(name);

// 2-Return only detlis of those who scroed more than 60 mark

// let students = [
//   { name: "abhi", rollNo: 311, mark: 99 },
//   { name: "Dipak", rollNo: 312, mark: 69 },
//   { name: "jayesh", rollNo: 313, mark: 35 },
//   { name: "Ronak", rollNo: 314, mark: 55 },
// ];

// const name = students.filter((stu)=> {
//     return stu.mark > 60
// })
// console.log(name);

// 3-return only those more than 60 mark and rollno gretern than 15

// let students = [
//   { name: "abhi", rollNo: 31, mark: 99 },
//   { name: "Dipak", rollNo: 15, mark: 69 },
//   { name: "jayesh", rollNo: 16, mark: 35 },
//   { name: "Ronak", rollNo: 7, mark: 55 },
// ];

// const detlis = students.filter((stu) => {
//   return stu.mark > 60 && stu.rollNo > 15;
// });

// console.log(detlis);

// 4-retun only sum of all students mark

// let students = [
//   { name: "abhi", rollNo: 31, mark: 99 },
//   { name: "Dipak", rollNo: 15, mark: 69 },
//   { name: "jayesh", rollNo: 16, mark: 35 },
//   { name: "Ronak", rollNo: 7, mark: 55 },
// ];

// const sum = students.reduce((acc, curr) => {
//   return acc + curr.mark;
// }, 0);
// console.log(sum);

// 5-return only names  of students who scrored more than 60

// let students = [
//   { name: "abhi", rollNo: 31, mark: 99 },
//   { name: "Dipak", rollNo: 15, mark: 69 },
//   { name: "jayesh", rollNo: 16, mark: 35 },
//   { name: "Ronak", rollNo: 7, mark: 55 },
// ];

// const name = students.filter((stu)=>stu.mark >60).map(stu=>stu.name)

// console.log(name);

// 6-return  total mark for students with mark greater than 60 after 20 mark have been added to those who scroed less than 60

let students = [
  { name: "abhi", rollNo: 31, mark: 99 },
  { name: "Dipak", rollNo: 15, mark: 69 },
  { name: "jayesh", rollNo: 16, mark: 35 },
  { name: "Ronak", rollNo: 7, mark: 55 },
];

const totalMrk = students
  .map((stu) => {
    if (stu.mark < 60) {
      stu.mark += 20;
    }
    return stu;
  })
  .filter((stu) => stu.mark > 60)
  .reduce((acc, curr) => acc + curr.mark,0)

console.log(totalMrk);
