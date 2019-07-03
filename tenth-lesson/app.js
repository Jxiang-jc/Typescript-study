// 1.class set get 修饰词 用于隔离私有属性 和 共有属性
// 2.class 静态属性和方法
var Person = /** @class */ (function () {
    function Person() {
        this._name = 'Jxiang';
    }
    Person.calcCircle = function (value) {
        return this.PI * value;
    };
    Object.defineProperty(Person.prototype, "setName", {
        // 私有属性赋值
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        // 私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Person.PI = 3.14;
    return Person;
}());
// let person = new Person();
// console.log(person.getName);
// person.setName = 'zhangjx';
// console.log(person.getName);
// console.log(person.PI);
console.log(Person.PI);
console.log(Person.calcCircle(8));

/* 
    直接运行 tsc app.ts 会报错
    
    Accessors are only available when targeting ECMAScript 5 and higher.

    需要指定编译版本再es5以上才行

    执行命令 tsc app.ts -t es5
*/