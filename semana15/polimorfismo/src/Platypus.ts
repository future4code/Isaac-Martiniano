import { Animal } from "./Animal";
import { Oviparous } from "./Oviparous";

export class Platypus extends Animal implements Oviparous{
    eggQuantity = 0;
    
    public makeSound(): void {
        console.log("Aquele barulhinho lá");
    }

    public move(): void{
        console.log("correu, ou nadou")
    }

    layEggs(eggs: number): void {
        console.log(this.name, " botou ", eggs, " ovos ")
    }
}