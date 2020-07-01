"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(name) {
        console.log("criando o constructor da class dog");
        super(name);
        this.weight = 20;
    }
    makeSound() {
        console.log("AU AU ");
    }
    move() {
        console.log("Correu ");
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map