"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dog_1 = require("./Dog");
const Owl_1 = require("./Owl");
const Fish_1 = require("./Fish");
const dog = new Dog_1.Dog("bolinha");
const owl = new Owl_1.Owl("edwiges");
const fish = new Fish_1.Fish("Oscar");
dog.move();
owl.move();
fish.move();
console.log(dog);
console.log(owl);
console.log(fish);
//# sourceMappingURL=index.js.map