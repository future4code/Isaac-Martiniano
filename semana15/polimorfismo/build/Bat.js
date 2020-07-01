"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bat = void 0;
const Animal_1 = require("./Animal");
class Bat extends Animal_1.Animal {
    constructor(name) {
        super(name);
        this.weight = 5;
        this.altitude = 0;
    }
    makeSound() {
        console.log("NANANANANANANANANANANANANA");
    }
    move() {
        console.log("Voou");
    }
    fly() {
        this.altitude = 100;
    }
    suckBlood(quantity) {
        this.weight += (quantity / 2);
    }
}
exports.Bat = Bat;
//# sourceMappingURL=Bat.js.map