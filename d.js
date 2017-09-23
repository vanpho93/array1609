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

// console.log(arrPerson.find(e => e.name === 'Teo'));
// console.log(arrPerson.findIndex(e => e.name === 'Teo'));

function find(arrRaw, checkElementFunction) {
    for(let i = 0; i < arrRaw.length; i++) {
        if (checkElementFunction(arrRaw[i])) return arrRaw[i];
    }
    return null;
}
console.log(find(arrPerson, e => e.name === 'Teo'));