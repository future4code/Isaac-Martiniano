// EXERCÍCIO 3
import { Commerce } from "./Commerce";
import { Client } from "./Client";
import { Residence } from "./Residence";
import { Industry } from "./Industry";

const newCommerce: Commerce = new Commerce(3, "43434-234")
const newResidence: Residence = new Residence(6, "54235-685")
const newIndustry: Industry = new Industry(9, "22323-232")

console.log(newCommerce)
console.log(newResidence)
console.log(newIndustry)

 const client: Client = {
    name: "Isaac",
    registrationNumber: 7,
    consumedEnergy: 77,
  
    calculateBill: () => {
      return 34;
    }
  }
  console.log(client)







// import { Dog } from "./Dog";
// import { Owl } from "./Owl";
// import { Fish } from "./Fish";

// const dog = new Dog("bolinha");
// const owl = new Owl("edwiges");
// const fish = new Fish("Oscar");


// dog.move();
// owl.move();
// fish.move();

// console.log(dog)
// console.log(owl)
// console.log(fish)