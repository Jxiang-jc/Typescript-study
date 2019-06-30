"use strict";
var sumValue = {
    money: 200,
    count: function (value) {
        this.money += value;
    }
};
var handleCount = {
    name: 'Jxiang',
    sumValue: sumValue,
    friends: ['hongliang', 'xiaobing']
};
handleCount.sumValue.count(500);
console.log(handleCount);
