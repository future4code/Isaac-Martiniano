export type carro = {
    marca: string,
    capacidadeDoTanque: number,
    temMotorFlex: boolean
}

export const uno: carro = {
    marca: "fiat",
    capacidadeDoTanque: 40,
    temMotorFlex: false
}
export const gol: carro = {
    marca: "volkswagen",
    capacidadeDoTanque: 45,
    temMotorFlex: true
}
export const fiesta: carro = {
    marca: "ford",
    capacidadeDoTanque: 40,
    temMotorFlex: true
}
export const corsa: carro = {
    marca: "chevrolet",
    capacidadeDoTanque: 45,
    temMotorFlex: true
}

export const frota: carro[] = [uno, gol, fiesta, corsa]

//console.log(frota)
//function buscarCarros(carros: carro[], marca){
//}

