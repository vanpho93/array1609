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

const arrNumber = [1, 3, 5, 4, 2, 6];

console.log(arrNumber.indexOf(2));
console.log(arrNumber.indexOf(100));

let s = { branch: 'Suzuki' };
let h = { branch: 'Honda' };
let m = { branch: 'Madza' };

let x = m;

const arrCar = [s, h, m];

console.log(arrCar.indexOf(x));
