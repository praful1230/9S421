class Person {
    constructor(name) {
        this.name = name;
    }

    get userName() {
        return this.name;
    }

    set userName(value) {
        this.name = value;
    }
}

let obj = new Person("Rahul");

console.log(obj.userName);

obj.userName = "Ravi";

console.log(obj.userName);