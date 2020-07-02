"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exercicio1_1 = require("./exercicio1");
function cars(arrayDeCarros, marca) {
    if (marca) {
        return arrayDeCarros.filter((carro) => {
            return carro.marca === marca;
        });
    }
    else {
        return arrayDeCarros;
    }
}
const resultado = cars(exercicio1_1.frota, "chevrolet");
//# sourceMappingURL=exercicio2.js.map