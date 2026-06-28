class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }
}

let obj = new Person("Rahul");

console.log(obj.getName());

obj.setName("Ravi");

console.log(obj.getName());