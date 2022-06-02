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
    
    found(personsList, name) {
        if (!personsList.length > 0) {
            return false;
        }
        else {
            for (let i = 0; i < personsList.length; i++) {
                if (personsList[i].name === name) return true;
            }
        }
    }
}