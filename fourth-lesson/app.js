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
var colors = ['hello', 99];
// enum(枚举)
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yello"] = 100] = "Yello";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
console.log(myColor);
