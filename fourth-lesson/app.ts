// 数组 元组 枚举

// 数组
// let names: Array<string> = ['jx', 'Jxiang'];
// let numbers: Array<number> = [1, 2];
// let numbers: number[] = [1, 2]; // 等同上面

// let anyArray: any[] = ['hello', 1, false];

// console.log(names[0]);

// names[0] = 'hello';
// names = ['hello'];

// 元组
let colors: [string, number] = ['hello', 99];

// enum(枚举)
enum Color {
    Black, // 0
    Yello = 100, // 1
    Red // 101
}

let myColor: Color = Color.Red;
console.log(myColor);