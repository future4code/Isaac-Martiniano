"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platypus = void 0;
const Animal_1 = require("./Animal");
class Platypus extends Animal_1.Animal {
    constructor() {
        super(...arguments);
        this.eggQuantity = 0;
    }
    makeSound() {
        console.log("Aquele barulhinho lá");
    }
    move() {
        console.log("correu, ou nadou");
    }
    layEggs(eggs) {
        console.log(this.name, " botou ", eggs, " ovos ");
    }
}
exports.Platypus = Platypus;
//# sourceMappingURL=Platypus.js.map