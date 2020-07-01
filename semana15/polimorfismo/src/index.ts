import { Dog } from "./Dog";
import { Owl } from "./Owl";
import { Fish } from "./Fish";

const dog = new Dog("bolinha");
const owl = new Owl("edwiges");
const fish = new Fish("Oscar");


dog.move();
owl.move();
fish.move();

console.log(dog)
console.log(owl)
console.log(fish)