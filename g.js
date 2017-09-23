class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Xin chao, toi la ' + this.name);
    }
}

class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }

    sayHello() {
        super.sayHello();
        console.log('Xin chao, em la ' + this.name);
    }
}

const teo = new Child('Teo', 10, 'Oto');
console.log(teo);
teo.sayHello();
// console.log(teo);
