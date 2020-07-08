"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        console.log("criando um constructor da class animal");
        this.name = name;
        this.weight = 0;
    }
    eat(quantity) {
        this.weight += quantity;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map