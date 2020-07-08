export abstract class Animal { 
    protected name: string;
    protected weight: number;

    constructor(name: string){
        console.log("criando um constructor da class animal")
        this.name = name;
        this.weight = 0;
    }

    public eat(quantity: number): void{
        this.weight+= quantity;
    }
   
    public abstract makeSound(): void;

    public abstract move(): void;
}


