// Task 1
let var1 = 10;
let var2 = 20;
let var3 = var1 + var2;
console.log("addition is:" + var3);
let var4 = var1 - var2;
console.log("subtraction is:" + var4);
let var5 = var1 * var2;
console.log("multiply is:" + var5);
let var6 = var2 / var1;
console.log("division is:" + var6);
function myFunction(var1, var2) {
  if (var1 == var2) {
    console.log("Values are same");
  } else {
    console.log("Different values occurred");
  }
}
myFunction(var1, var2);
function newfunc(va1, va2) {
  if (var1 === var2) {
    console.log("Values and type are same");
  } else {
    console.log("Different values and type occurred");
  }
}
var va1 = 32;
let va2 = 32;
newfunc(va1, va2);

// Task 2

const person = {
  name: "huraira furqan",
  email: "hurairafurqan13@gmail.com",
  age: 23,
};

console.log(person);

// Task 3
let arr = [1, 24, 64, 33, 2, 1, 4, 536, 4];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;

    i = -1;
  }
}

console.log(arr);
