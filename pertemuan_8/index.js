// JavaScript Loop

// Array Object
let students = [
  {
    id: 1,
    firstName: "john",
    grade: 80,
  },
  {
    id: 2,
    firstName: "jane",
    grade: 90,
  },
  {
    id: 3,
    firstName: "Bob",
    grade: 100,
  },
];
//console.log(students);

// // For loop
// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].firstName);
// }

// // While loop
// let i = 0;
// while (i < students.length) {
//   console.log(students[i].firstName);
//   i++;
// }

// // do-while loop
// let i= 0;
// do {
//     console.log(students[i].firstName);
//     i++;
// }while (i<students.length);

// Array built-in method
// // forEach()
// students.forEach(function (item) {
//   console.log(item.firstName);
// });

// // Map()
// let output = students.map(function (item) {
//   return item.firstName;
// });
// console.log(output);

// Filter()
let outputFilter = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFilter);

// Find()
let outputFind = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

// findIndex()
let outputFindIndex = students.findIndex(function (item) {
  return item.firstName === "jane";
});
console.log(outputFindIndex);
