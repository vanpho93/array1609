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

// ['Teo', 'Ti', 'Tun']
// console.log(arrPerson.map(e => e.name));

// in ra mang cua name cua cac phan tu co age > 12 // ['Ti', 'Tun']
const ageBiggerThan12 = arrPerson.filter(e => e.age > 12);
console.log(ageBiggerThan12.map(e => e.name));

console.log(arrPerson.filter(e => e.age > 12).map(e => e.name));
