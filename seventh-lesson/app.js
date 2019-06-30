// union type  检查类型 null undefined never
// union type
var unionType = 12;
unionType = '12';
unionType = true;
// 检查类型
var checkType = 10;
if (typeof checkType === "string") {
    console.log('number');
}
else {
    console.log('类型不是number');
}
