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
function* generationFn() {
  yield;
}

let generationObject = generationFn();
console.log(generationObject.next());
console.log(generationObject.next());
console.log(generationObject.next());
