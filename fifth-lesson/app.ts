// 函数的相关类型

function returnValue(): string {
    return 'hello'
}

console.log('returnValue->', returnValue());

// 空 函数没有任何返回值
function sayHello(): void {
    console.log('jx666');
}

// 参数返回值
function sumValue(value1: number, value2: number): number {
    return value1 + value2;
    // return value1 * value2; // 如果两个参数中有一个不是数值， 返回NaN
}

console.log(sumValue(1, 2));

// 函数类型
let myFunc: (a: number, b:number) => number;

// myFunc = sayHello;
// myFunc();

myFunc = sumValue;
console.log(myFunc(5, 5));
