//EXERCÍCIO 1

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

//  const client: Client = {
//     name: "Isaac",
//     registrationNumber: 7,
//     consumedEnergy: 77,
  
//     calculateBill: () => {
//       return 34;
//     }
//   }
//   console.log(client)

  // Foi impresso os 4 atributos POREM o atributo calculateBill imprimiu [Function: calculateBill]
  