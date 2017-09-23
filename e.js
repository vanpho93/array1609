const arrNum = [1, 4, 2];
// console.log(arrNum.reduce((a, b) => a + b));
// console.log(arrNum.sort((a, b) => a - b));

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arrPerson = [
    new Person('Teo', 10, 160),
    new Person('Ti', 15, 150),
    new Person('Tun', 14, 180)
]; 

// console.log(arrPerson.sort((a, b) => a.age - b.age));
// console.log(arrPerson.sort((a, b) => -a.height + b.height));
console.log(arrPerson.map(e => e.age).reduce((a, b) => a + b));
