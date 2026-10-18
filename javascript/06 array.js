const arr1 = [1, 2, 3]; // Reference Type/ Non Premtive Type
const arr2 = arr1;
arr1.push(4);
arr2.push(5);
// arr1 = 1010
// arr2 = arr1 -> 1010

let x = 2;
let y = x;
console.log(x, y);

x = 4;

// console.log(x, y);
console.log(arr1, arr2);

arr1[2] = 33;

console.log(arr1[2]);
