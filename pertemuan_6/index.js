//ARRAY in JS
//Deklarasi Array
//Cara 1. Array Literal

// let numbers = [1, 2, 3 , 4, 5];
// console.log(numbers);

// //Cara 2. Kata kunci new

// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

//Tipe data yang disimpan dalam array

let numbers = [1, 2, 3, 4, 5]; //numbers
let students = ["john", "Jane", "Bob"]; // string
let john = ["john", 30, true, [80, 90, 100]]; // mixed
console.log(john);

//Array Length

console.log(numbers, length); // 5
console.log(students, length); // 4
console.log(john, length); // 3

//  Cara mengakses element / data tertentu dalam array
// Melalui  index array, Index selalu dimulai
console.log(numbers[2]); // 3
console.log(john[2]); // true
console.log(students[1]); // jane
console.log(john[3][1]); //90

// Mengakses element atau data terakhir dalam array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[9]);
console.log(numbers2[numbers2.length - 1]); // akses data terakhir
let index = numbers2.findIndex(function (item) {
  return item === "7";
});
console.log(index);

// Array Method
let array = [1, 2, 3, "hello", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. join
console.log(array.join());
console.log(array.join(""));
console.log(array.join("-"));
//3. Pop
array.pop();
console.log(array);
//4. Push
array.push("Selamat Pagi");
console.log(array);
//5. Shift
array.shift();
console.log(array);
//6. unshift
array.unshift("Selamat Pagi");
console.log(array);
//7. Splice
array.splice(2, 1); //Hapus index ke 2
console.log(array);

array.splice(1, 1, 1); //ganti di index 1
console.log(array);

array.splice(2, 0, 2, 3); //tambah
console.log(array);

//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);

let bijian = makanan.slice(6);
console.log(bijian);
