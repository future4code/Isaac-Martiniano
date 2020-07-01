"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
const Animal_1 = require("./Animal");
class Owl extends Animal_1.Animal {
    constructor(name) {
        super(name);
        this.weight = 5;
    }
    makeSound() {
        console.log("HU HU  ");
    }
    move() {
        console.log("Voou");
    }
}
exports.Owl = Owl;
//# sourceMappingURL=Owl.js.map