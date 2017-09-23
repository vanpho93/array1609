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

// some, every, sort, find, findIndex, forEach

console.log(arrPerson.some(e => e.height > 170));
console.log(arrPerson.every(e => e.height > 170));

// function filter(arrRaw, checkElementFunction) {
//     const arrOutput = [];
//     for(let i = 0; i < arrRaw.length; i++) {
//         if (checkElementFunction(arrRaw[i])) return arrOutput.push(arrRaw[i]);
//     }
//     return arrOutput;
// }

// filter(arrPerson, e => e.height > 170);

function some(arrRaw, checkElementFunction) {
    for(let i = 0; i < arrRaw.length; i++) {
        if (checkElementFunction(arrRaw[i])) return true;
    }
    return false;
}

some(arrPerson, e => e.height > 170) // tra ve true
some(arrPerson, e => e.height > 190) // tra ve false
