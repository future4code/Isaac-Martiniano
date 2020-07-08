import { Animal } from "./Animal";
import { Flyer } from "./Flyer";
import { Vampire } from "./Vampire";

export class Bat extends Animal implements Flyer, Vampire{
    altitude: number;

    constructor(name: string){
        super(name);
        this.weight = 5;
        this.altitude = 0;       
    }

    public makeSound(): void {
        console.log("NANANANANANANANANANANANANA");
    }

    public move(): void{
        console.log("Voou")
    }
    public fly(): void{
        this.altitude = 100;
    }
    public suckBlood(quantity: number): void{
        this.weight += (quantity/2);
    }
}