/**
 * 1. Primitive Type
 *  - String "a-z A-Z !@# 1-0" e.g "1" '1'
 *  - Number 0-9 33.3 22.33333
 *  - Boolean true/ false
 *  - null
 *  - undefined
 *
 * 2. Reference/ Non-Primitive Type
 *  - Array
 *  - Object
 *  - new Date()
 */

// Primitive Type
// console.log(a, "before");
// var a = "1";
// a = 2;
// let x = 2;
// let y = 3;
// const pi = 3.142;
// console.log(a, x, pi, "after");

// let q;
// let w = null;
// let name = "";

// let firstName = "Basit";
// let lastName = "Hussain";

// let fullName = "This is " + firstName + " " + lastName;
// console.log(fullName);

// let sum = 2 + "2";
// let sub = 2 - "2";
// let mul = 2 * "2";
// let div = 2 / "2";
// let checkNaN = 2 / "asd";
// let checkBool1 = 1 + true;
// let checkBool2 = "1" + true;
// let checkBool3 = null + "1";
// let checkBool4 = undefined + "1";
// let checkBool5 = null + 1;
// let checkBool6 = undefined + 1;
// // console.log(sum, sub, mul, div, checkNaN);
// console.log(checkBool5);

// Type Conversion/ type coercion
let x = "2";
let y = 2;

console.log(typeof Number(x));
console.log(typeof parseInt(x));
console.log(typeof +x);

console.log(typeof String(y));
console.log(typeof y.toString());

console.log(typeof Boolean(x), Boolean(x));
console.log(typeof Boolean(undefined), Boolean(undefined));
