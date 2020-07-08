import { Place } from "./Place";

export class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    public getDwellersQuantity(): number {
        return this.dwellersQuantity
    }
  }

  