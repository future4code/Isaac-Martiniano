enum Marcas {
    VOLKSWAGEN = "Volkswagen",
    FIAT = "Fiat",
    FORD = "Ford",
    CHEVROLET = "chevrolet",
}

export type carro = {
    marca: string,
    capacidadeDoTanque: number,
    temMotorFlex: boolean
}

export const uno: carro = {
    marca: Marcas.FIAT,
    capacidadeDoTanque: 40,
    temMotorFlex: false
}
export const gol: carro = {
    marca: Marcas.VOLKSWAGEN,
    capacidadeDoTanque: 45,
    temMotorFlex: true
}
export const fiesta: carro = {
    marca: Marcas.FORD,
    capacidadeDoTanque: 40,
    temMotorFlex: true
}
export const corsa: carro = {
    marca: Marcas.CHEVROLET,
    capacidadeDoTanque: 45,
    temMotorFlex: true
}
