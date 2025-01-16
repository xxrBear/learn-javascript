// alert("Hello World!");

/* 变量
let name = 'Bob';
console.log(name);


let firstName = 'Bob';
let lastName = 'Bob';
console.log(firstName, lastName);
*/


/* 数据类型
let number = 1;
console.log(number);
console.log(typeof number);


// let number = '1'; 再次定义同名变量会报错

number = number.toString();
console.log(number);
console.log(typeof number);

console.log(null);
console.log(typeof null);
 */

/*
let firstName = 'Bob';
firstName = 'Bob2';
console.log(firstName);

const lastName = 'Bob';
// lastName = 'Bob2'; 报错

// 作用域不同的两种变量声明方式

// firstName = 'Bob';
// 虽然可以，但是永远不要用 ，会创建全局变量
 */

let markMass = 1;
let markHeight = 1;
let johnMass = 2;
let johnHeight = 2;

markBMI = markMass / markHeight ** 2
johnBMI = johnMass / johnHeight ** 2

console.log(johnBMI, markBMI);