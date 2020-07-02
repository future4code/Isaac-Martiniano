import {carro, frota} from './exercicio1';

function cars(arrayDeCarros: carro[], marca?: string):carro[] {
    if(marca) {
        return arrayDeCarros.filter((carro) => {
            return carro.marca ===marca
        })
    } else {
        return arrayDeCarros
    }
}
//const resultado: carro[] = cars(frota)
const resultado: carro[] = cars(frota, "chevrolet");

//console.log(resultado)