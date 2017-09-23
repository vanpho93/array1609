class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get birthYear() {
        return 2017 - this.age;
    }

    set birthYear(value) {
        this.age = 2017 - value;
    }
}

const teo = new Person('Teo', 10);
// console.log(teo.birthYear);
teo.birthYear = 2005;
console.log(teo.age);
