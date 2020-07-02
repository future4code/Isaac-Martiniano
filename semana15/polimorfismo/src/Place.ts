// EXERCÍCIO 2
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
  //const myCep: Place = new Place("53060525")
  // Cannot create an instance of an abstract class.
  // Não é possível criar uma instância de uma classe abstrata.

//console.log(myCep)