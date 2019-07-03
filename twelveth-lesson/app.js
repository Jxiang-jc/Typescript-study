// namespace: 命名空间
var MyMath;
(function (MyMath) {
    function sumValue(num1, num2) {
        return num1 + num2;
    }
    MyMath.sumValue = sumValue;
})(MyMath || (MyMath = {}));
// namespace: 命名空间
var MyMath;
(function (MyMath) {
    MyMath.PI = 3.14;
    function calcCircle(value) {
        return value * MyMath.PI;
    }
    MyMath.calcCircle = calcCircle;
})(MyMath || (MyMath = {}));
// namespace: 命名空间
console.log(MyMath.sumValue(5, 10));
console.log(MyMath.calcCircle(30));
// tsc --outfile app.js sumValue.ts calcCircle.ts app.ts
