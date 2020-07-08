import { Animal } from "./Animal";

export class Dog extends Animal{

    constructor(name: string){
        console.log("criando o constructor da class dog")
        super(name);
        this.weight = 20;
    }

    public makeSound(): void {
        console.log("AU AU ");
    }

    public move(): void{
        console.log("Correu ")
    }
}