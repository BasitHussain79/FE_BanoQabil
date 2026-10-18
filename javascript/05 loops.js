// For Loop

for (let i = 0; i < 2; i++) {
  console.log(i);
}

// 1. i = 0;
// 2. i < 2 -> 0 < 2 -> T
// 3. print i -> 0
// 4. i++; i+1 -> 0+1 -> 1
// 5. i = 1
// 6. i < 2; -> 1 < 2 -> T
// 7. print i -> 1
// 8. i++ -> 1 + 1 -> 2
// 9. i = 2
// 10. i < 2; -> 2 < 2 -> F -> Loop Exit

// While Loop
let x = 0;
while (x < 2) {
  console.log(x);
  x++;
}

// 1. x = 0;
// 2. x < 2 -> 0 < 2 -> T
// 3. print x -> 0
// 4. x++ -> x+1 -> 0 +1 -> 1
// 5. x = 1;
// 6. 1 < 2 -> T
// 7. print x -> 1
// 8. x++ -> 1 + 1 -> 2
// 9. x = 2;
// 10. 2 < 2 -> F -> Loop Exit

// do while
let y = 3;
do {
  console.log(y);
  y++;
} while (y < 2);

// 1. y = 0;
// 2. print y -> 0
// 3. increment y++ -> y + 1 -> 0 + 1 = 1
// 4. 1 < 2 -> T
// 5. y = 1;
// 6. print y -> 1
// 7. y++ -> 1 + 1 -> 2
// 8. 2 < 2 -> F -> Loop Exit

// For of
// const arr = ["A", "B", "C"];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i])
// // }
// for (let o of arr) {
//   console.log(o);
// }

// for in
const obj = {
  firstName: "Basit",
  lastName: "Hussain",
  age: 22,
  isAdmin: true,
  email: "basit@email.com",
};

for (let p in obj) {
  console.log(`${p}: ${obj[p]}`);
  console.log(p + ": " + obj[p]);
}

console.log(obj.firstName, obj["firstName"]);
