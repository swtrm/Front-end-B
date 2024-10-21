// //Deklarasi Object
// // Object literal

// let john = {
//   firstName: "John",
//   age: 30,
//   isMarried: true,
//   grade: [80, 90, 100],
//   sayGretings: function () {
//     //Object Method
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     street: "Jl. Arnold Mononutu Airmadidi",
//     city: "Minahasa Utara",
//     Province: "Sulawesi Utara",
//     postalcode: 95371,
//   },
// };
// console.log(john);

// //Mengakses properti dalam object
// // 1. Dot notation
// console.log(john.firstName);
// console.log(john.age);
// john.age = 31;
// console.log(john);
// john.job = "teacher";
// console.log(john);

// // 2. Bracket Notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "indonesia"; //tambal
// console.log(john);

// // Object Method
// john.sayGretings();

// // Object inside object
// console.log(john.address.city);

// //Delete Properties dalam object
// delete john.grade;
// console.log(john);

// JavaScript Conditional
// 1. IF - ELSE
// Jika suhu hari ini lebih dari atau sama dengan 37,
// Tamoilkan suhu hari ini panas
// jika tidak tampilkan suhu hari ini dingin

let suhu = 38;
if (suhu >= 37) {
  console.log("hari ini panas");
} else {
  console.log("hari ini dingin");
}

// 2. IF - Else if- Else
// Jika nilai 100 - 80 tampilkan grade A
// Jika nilai 70 - 79 tampilkan grade B
// Jika nilai 50 - 69 tampilkan grade C
// Jika nilai dibawah 50 tampilkan grade D
let nilai = 75;
if (nilai >= 80 && nilai <= 100) {
  console.log("Grade A");
} else if (nilai >= 70 && nilai <= 79) {
  console.log("Grade B");
} else if (nilai >= 50 && nilai <= 69) {
  console.log("Grade C");
} else if (nilai < 50) {
  console.log("Grade D");
}

// 3. Switch - case /range nilai tidak bisa
// Jika angka 1 tampilkan januari
// jika angka 2 tampilkan februari
// dan seterusnya
