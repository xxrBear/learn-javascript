// // console.log("Hello World!");

// // 创建 js 数组
// let nameArray = []; //字面量创建数组
// let newNameArray = Array(); //构造函数创建数组

// // console.log(nameArray, newNameArray);

// // Array.of 方法创建数组
// let arr = Array.of(1, 2, 3);
// // console.log(arr);

// // Array.from
// let arr1 = Array.from("name");
// console.log(arr1); // ['n', 'a', 'm', 'e']

// let a1 = [
//   [1, 2],
//   [3, 4],
// ];

// a2 = Array.from(a1);
// // console.log(a1 === a2); // false

// const a3 = [1, 2, 3, 4];
// a4 = Array.from(a3, (x) => x ** 2);
// console.log(a4); // [1, 4, 9, 16]

// let a1 = [];
// console.log(a1 instanceof Array);
// let a2 = "hello";
// console.log(a2 instanceof Array); // false

// console.log(Array.isArray([]));

// const a1 = [1, 2, 3];
// console.log(Array.from(a1.keys())); //[0, 1, 2]

// const a1 = [1, 2, 3];
// console.log(Array.from(a1.values())); //[0, 1, 2]

// const a1 = [1, 2, 3];
// let a = Array.from(a1.entries());
// console.log(a); // [[0, 1], [1, 2], [2, 3]]
// const zeroes = [0, 0, 0, 0, 0];
// zeroes.fill(5);
// console.log(zeroes); // [5, 5, 5, 5, 5]

// zeroes.fill(3, 3, 10);
// console.log(zeroes); //[5, 5, 5, 3, 3]

// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 1); // 将索引 3 到末尾的元素复制到索引 0 的位置
// console.log(arr); // [4, 5, 3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(-2, 0); // 将索引 0 到末尾的元素复制到倒数第二个位置
// console.log(arr); // 输出: [1, 2, 3, 1, 2]

// const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 6); // start 超出数组长度，不会复制任何元素
// console.log(arr); // 输出: [1, 2, 3, 4, 5]

// Valueof
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1.valueOf()); // [1, 2, 3]
// console.log(arr1.toLocaleString()); // 1,2,3
// console.log(arr2.toString()); // 1,2,3

// let arr = [1, 2, 4, 3, 5, 11];
// // arr.reverse();
// // console.log(arr); // [5, 3, 4, 2, 1]

// function compare(v1, v2) {
//   return v1 - v2;
// }
// arr.sort(compare);
// console.log(arr);

// let arr = [1, 2, 3];
// // console.log(arr);
// let arr2 = arr.concat("xxx", ["sss", "fff"]);
// console.log(arr2);

// let colors = ["red", "green", "blue", "yellow", "purple"];
// let colors2 = colors.slice(1);
// let colors3 = colors.slice(1, 4);

// console.log(colors2);
// console.log(colors3);

// let arr = [1, 2, 3, 5, 1, 9];

// console.log(
//   arr.find((element, index, array) => {
//     return element > 2;
//   })
// ); // 3 返回匹配的值

// let arr = [1, 3, 5, 7, 7, 5, 3, 1];
// console.log(arr.indexOf(5)); //2
// console.log(arr.indexOf(5, 2)); //2
// console.log(arr.indexOf("5")); //-1

// let numbers = [1, 2, 3];

// console.log(numbers.every((ele, index, arr) => ele >= 1)); // true
// console.log(numbers.every((ele, index, arr) => ele > 2)); // false

// let numbers = [1, 2, 3];

// console.log(numbers.some((ele, index, arr) => ele >= 1)); // true
// console.log(numbers.some((ele, index, arr) => ele > 3)); // false

// let numbers = [1, 2, 3];

// console.log(numbers.filter((ele, index, arr) => ele > 1)); // [2, 3]

// let numbers = [1, 2, 3];

// console.log(numbers.map((ele, index, arr) => ele ** 2)); // [1, 4, 9]

// let arr = [11, 22, 33, 44, 55];
// arr.forEach(function (e, index, arrry) {
//   console.log(e);
// });

let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur, index, array) => prev + cur);

console.log(sum);
