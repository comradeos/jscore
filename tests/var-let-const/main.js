class MyClass {
    constructor() {
        this.name2 = "name2";
    }

    hello() {
        console.log("hello hello hello");
        console.log(this.name2)

    }
}


var p = new MyClass();

p.hello();