class Person {

    constructor(name, age, nacionality) {
        this.name = name;
        this.age = age;
        this.nacionality = nacionality;
    }

    getName() { return this.name; }
    getAge() { return this.age; }
    getNacionality() { return this.nacionality; }
    isAdult() { return (this.age > 17 ? true : false); }
    found() { return (this.name.length > 0 + this.nacionality.length + this.age >= 0); }
}