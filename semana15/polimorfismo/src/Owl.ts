import { Animal } from "./Animal";

export class Owl extends Animal{

    constructor(name: string){
        super(name);
        this.weight = 5;
    }

    public makeSound(): void {
        console.log("HU HU  ");
    }

    public move(): void{
        console.log("Voou")
    }
}