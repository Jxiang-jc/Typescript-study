type myType = { money: number, count: (value: number) => void };
let sumValue: myType = {
    money: 200,
    count(value: number): void {
        this.money += value;
    }
};

let handleCount: { name: string, sumValue: myType, friends: string[] } = {
    name: 'Jxiang',
    sumValue: sumValue,
    friends: ['hongliang', 'xiaobing']
};

handleCount.sumValue.count(500);
console.log(handleCount);