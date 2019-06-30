// object & type
var dataObj = {
    name: 'Jxiang',
    age: 31
};
// 会报错
// dataObj = {
//     a: 'hello',
//     b: 12
// }
dataObj = {
    name: 'hello',
    age: 12
};
// 复杂对象类型
// 第一个参数： 数值数组
// 第二个参数： 一个function， 形参是数值类型，返回值是数值数组
var complex = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log(complex.myfunc(20));
var complex2 = {
    data: [1, 2, 3],
    myfunc: function (item) {
        this.data.push(item);
        return this.data;
    }
};
console.log(complex2.myfunc(20));
