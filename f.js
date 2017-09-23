class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

Person.prototype.sayHello = function() {
    console.log('Xin chao, toi la ' + this.name);
}
// mo rong 1 lop doi tuong

let teo = new Person('Teo', 10, 160);
let ti = new Person('Ti', 15, 150);
let tun = new Person('Tun', 14, 180);

const arrPerson = [teo, ti, tun];

Array.prototype.myMap = function(getValue) {
    const arrOutput = [];
    for(let i = 0; i < this.length; i++) {
        arrOutput.push(getValue(this[i]));
    }
    return arrOutput;
};

console.log(arrPerson.myMap(e => e.name));

// teo.sayHello();
