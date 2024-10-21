//IIFE (immediately Invoked Function Expression) n Callback Function
//1. IIFE
//a. no params, args n return value
// (function(){
//     //kode
//     console.log("hello");
// })();

// //b. with params, args n return value
// let output = (function(fullName){
//     return "hello" + fullName;
// })("ando");
// console.log(output);

// Callback Function
//a. no params, args n return value
function sayHello(callback){
    callback();
}

sayHello(function (){
    console.log("hello"); //callback
});

// //b. with params, args n return value
function sayHello(callback){
    let result = callback("ando");
    return result;
}

let output = sayHello(function (fullName){
   return "hello" + fullName 
})
console.log(output);