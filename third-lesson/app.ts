// 基本数据类型
// let num = 25;
// let flo = 25.5;
// let hex = 0xf000;
// let binary = 0b1001;
// let octal = 0o733;

// 重新赋值
// num = '25'; // 不能存储非原有的类型数据
// num = 25.5;

// ts 原型
let num = 25;
// 等同于
// let num: number = 25;

// boolean
let isLogin = false; // let isLogin: boolean = false;
// 更改
// isLogin = 1; // 不行

// string
let str: string = 'jx 666';

// 没有赋值时，可以是任何类型
let anything; // let angthing: any
anything = 25;
anything = 'hello'