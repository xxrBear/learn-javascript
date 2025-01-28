// Coding Challenge #4

/*
编写一个程序，用于接收一组以 underscore_case 命名的变量名，并将它们转换为 camelCase。

输入将来自 DOM 中的一个文本区域（见下方代码），并且在按钮被点击时进行转换。

测试数据（粘贴到文本区域）

复制
编辑
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
期望输出（5 个单独的 console.log 输出）
复制
编辑
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
提示：

提示 1：记住在文本区域中哪种字符表示换行 😉
提示 2：解决方案只需处理由两个单词组成的变量名，例如 a_b
提示 3：一开始不用考虑 ✅ 的实现，先实现变量名的转换 😉
提示 4：这个挑战是故意设置为有难度的，如果卡住了，可以先观看解决方案，然后暂停并继续尝试！
之后：用你自己的测试数据测试这个程序！

祝你好运 😀
*/


/*
function joinString(nameList) {
    let newNameList = Array();
    for (let i of nameList.entries()) {
        let [index, _name] = i;
        if (index === 0) {
            newNameList.push(_name.toLowerCase());
        } else {
            const _newName = _name.replace(_name[0], _name[0].toUpperCase());
            newNameList.push(_newName);
        }
    }
    return newNameList.join('');
}

// 传入下划线样式的字符串，转化为驼峰式字符串
function coverCaml(name) {
    if (typeof name === 'string') {
        let handleName = name.split('_');

        const newNameList = joinString(handleName);

        console.log(newNameList);
    }
}

coverCaml('underscore_case');
coverCaml('first_name');
coverCaml('Some_Variable');
coverCaml('calculate_AGE');
coverCaml('delayed_departure');

 */

/*
const testObject = {
    name: 'test',
    age: 32,
    id_list: [1, 2, 3, 4, 5]
}

console.log(testObject)

function test(obj) {
    obj.id_list.push(6);
    console.log(obj);
}

test(testObject);

console.log(testObject);

*/

//函数里面调用函数
//
// function wrapper(str) {
//     console.log('调用wrapper中');
// }
//
// function main(fn) {
//     console.log('我是main哟！！！');
//     console.log(`我是 ${fn.name}`);
//     fn();
// }
//
// main(wrapper);


// 测试变量提升

// function test() {
//     var xxx = 1;
//     console.log(xxx);
// }

// function test2() {
//     console.log(`输出 ${xxx} and ${typeof xxx}`);
// }
//
// test2();
//
// function solve(num) {
//     if (num <= 0) {
//         console.log(xxx)
//         return 0;
//     } else {
//         var xxx = 1;
//         return 1;
//     }
// }
//
// console.log(solve(-5));

// const name = (greeting) => {
//     return (name) => {
//         console.log(greeting);
//     }
// }

// forEach 循环

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
//
// arr.forEach((element, index, array) => {
//     console.log(`当前迭代${element} + ${array} + ${index}`);
// })

// 1.没有 continue 和 break参数，必须全部迭代

// arr = [1, 2, 3, 4, 5, 6];
// const arrMap = arr.map(element => element * 2)
//
// console.log(arrMap);

// 计算狗狗的年龄
dogAgesList = [1, 2, 4, 6, 7];

const calcDogHumanAge = ages => ages.map(element => element <= 2 ? element * 2 : 16 + element * 4).filter(element => element >= 18);

console.log(calcDogHumanAge(dogAgesList));
