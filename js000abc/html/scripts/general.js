"use strict";

console.log('general.js');

class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

class Model extends Car {
    constructor(brand, color) {
        super(brand);
        this.color = color;
    }
    showInfo(){
        console.log(`Car->Model: ${this.brand} in ${this.color} color!`);
    }
}

let model = new Model("BMW", "black");

class PopUp {
    constructor(method, h1Text, buttonText) {
        this.content = `
            <div class="popup">
                <form method="${method}" action="#">
                    <h1>${h1Text}</h1><br>
                    <label for="id"></label>
                    <input type="text" name="text" id="id"><br>
                    <button>${buttonText}</button>
                </form>
            </div>`;
    }
}

