// class 类 （属性，方法）
class Person {
    public name: string;
    protected gender: string = '男'; // 被保护的（当前类，或之类使用）
    private age: number = 23; // 私有

    constructor (name: string, public username: string) {
        this.name = name;
        this.username = username
    }

    printAge (age: number) {
        this.age = age;
        console.log(this.age)
        this.setGender(this.gender)
    }

    private setGender (gender: string) {
        this.gender = gender;
        console.log(this.gender);
    }

}

const person = new Person('Jxiang', 'jx');
console.log(person.name, person.username);

person.printAge(30);