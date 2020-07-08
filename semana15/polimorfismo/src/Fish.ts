import { Animal } from "./Animal";

export class Fish extends Animal{

    constructor(name: string){
        super(name);
        this.weight = 5;
    }

    public makeSound(): void {
        console.log("glup glup");
    }

    public move(): void{
        console.log("Nadou")
    }
}