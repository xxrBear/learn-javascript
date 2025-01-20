// 'use strict';
//
//
// const hello1 = 'Hello World';
// if (hello) {
//     console.log('Hello World');
// }

// 函数
// function demo() {
//     console.log(`I'm demo!`);
// }
//
// demo()
//
// function demo2(name) {
//     console.log(`I'm ${name}!`);
// }
//
// demo2()

// 声明式函数
// function demo3() {
//     console.log("Hello World!")
// }
//
// demo3();
//
// // 表达式函数
// const demo4 = function () {
//     console.log("Hello World!");
// }
//
// demo4();

// 箭头函数

// const demo4 = () => 1;
// console.log(demo4());
//
// const demo5 = (firstName) => {
//     console.log(firstName);
// }
//
// demo5('Bob');

// Object 对象数据结构
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Jonas',
//     age: 13,
//     getAllP: function () {
//         return `jonas is all 属性！${this.age}`;
//     }
// }
// console.log(typeof jonas["age"], jonas.firstName, jonas.lastName);
//
// jonas.bearFriend = 'Michael';
//
// // jonas.friend[0];
//
// console.log(jonas.getAllP());

// 编码挑战
// const mark = {
//     name: 'Mark',
//     getBMI: function () {
//         return 3;
//     }
// }
//
// const bob = {
//     name: 'Bob',
//     getBMI: function () {
//         return 2;
//     }
// }
//
// const message = bob.getBMI() > mark.getBMI() ? bob.getBMI() : mark.getBMI();
//
// console.log(message);

// for 循环，不要重复自己
// 打印变量
for (let num = 1; num <= 10; num++) {
    console.log(num);
}