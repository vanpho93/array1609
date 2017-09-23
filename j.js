class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const teo = new Person('Teo', 10);

const { name, age } = teo; // destructuring ES6
// const name = teo.name;
// const age = teo.age;
console.log(name, age);

const branch = 'Honda';
const color = 'red';

const car = { branch, color };
// const car = { branch: branch, color: color };
console.log(car);
