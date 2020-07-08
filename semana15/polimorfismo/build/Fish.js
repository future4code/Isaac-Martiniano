"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
const Animal_1 = require("./Animal");
class Fish extends Animal_1.Animal {
    constructor(name) {
        super(name);
        this.weight = 5;
    }
    makeSound() {
        console.log("glup glup");
    }
    move() {
        console.log("Nadou");
    }
}
exports.Fish = Fish;
//# sourceMappingURL=Fish.js.map