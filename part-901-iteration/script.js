// 迭代器协议

let arr = ["foo", "bar"];
// console.log(arr[Symbol.iterator]);

let iter = arr[Symbol.iterator](); // 迭代器
// console.log(iter);
// console.log(iter.next());

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

arr.splice(1, 0, "baz");

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// 生成器
// function* generatorFn() {}

// const g = generatorFn();
// console.log(g);
// console.log(g.next);
// console.log(g.next());

// yield关键字
// function* generationFn() {
//   yield;
// }

// let generationObject = generationFn();
// console.log(generationObject.next());
// console.log(generationObject.next());
// console.log(generationObject.next());

// console.log(xxx); // undifined
// var xxx = "Bear";

// function foo() {}
// let bar = function () {};
// let baz = () => {};

// console.log(foo.name);
// console.log(bar.name);
// console.log(baz.name);
// console.log((() => {}).name);
// console.log(new Function().name);
// function greet(name) {
//   console.log(arguments);
//   console.log(arguments.length);
// }

// greet("Alice", "Bob", "Charlie"); // ['Alice', 'Bob', 'Charlie', callee: ƒ, Symbol(Symbol.iterator): ƒ]

// let sum = () => arguments;

// sum();

// function makeKing(name = "Bear") {
//   return `King is ${name}`;
// }

// console.log(makeKing());

// let values = [1, 2, 3, 4, 5];

// function getSum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; ++i) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(getSum(...values));
// console.log(getSum(-1, ...values)); // 14
// function getSum(...values) {
//   return values.reduce((x, y) => x + y, 0);
// }

// console.log(getSum(1, 2, 3)); // 6

// console.log(sum(10, 10));
// function sum(n1, n2) {
//   return n1 + n2;
// }

// console.log(sum(10, 10)); // 20
// var sum = function sum(n1, n2) {
//   return n1 + n2;
// };

// function callSomeFunction(someFunction, someArgument) {
//   return someFunction(someArgument);
// }
// function add10(num) {
//   return num + 10;
// }

// let result = callSomeFunction(add10, 10);
// console.log(result);

// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   }
// }
// console.log(factorial(3));
// let trueFac = factorial;

// factorial = function () {
//   return 0;
// };

// console.log(trueFac(5)); // 120
// console.log(factorial(5)); // 0

// window.color = "red";
// let o = {
//   color: "blue",
// };

// function sayColor() {
//   console.log(this.color);
// }

// sayColor();

// o.sayColor = sayColor;
// o.sayColor();
// function outer() {
//   inner();
// }

// function inner() {
//   console.log(inner.caller);
// }
// outer();

// function sum(n1, n2) {
//   return n1 + n2;
// }

// function callSum1(n1, n2) {
//   return sum.apply(this, arguments);
// }

// function callSum2(n1, n2) {
//   return sum.apply(this, [n1, n2]);
// }

// console.log(callSum1(10, 10));
// console.log(callSum2(10, 10));
// function sum(n1, n2) {
//   return n1 + n2;
// }

// function callSum1(n1, n2) {
//   return sum.call(this, n1, n2);
// }

// console.log(callSum1(10, 10)); // 20
window.color = "red";
var o = {
  color: "blue",
};

function sayColor() {
  console.log(this.color);
}

let objectSayColor = sayColor.bind(o);
objectSayColor(); // blue
