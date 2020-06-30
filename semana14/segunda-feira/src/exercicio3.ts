type carro = {
    marca: string,
    capacidadeDoTanque: number,
    temMotorFlex: boolean,
    combustivelGasto: (km: number) => number
}
const uno: carro = {
    marca: "fiat",
    capacidadeDoTanque: 40,
    temMotorFlex: false,
    combustivelGasto: (km: number) => { return 0.15 * km }
}
const gol: carro = {
    marca: "volkswagen",
    capacidadeDoTanque: 45,
    temMotorFlex: true,
    combustivelGasto: (km: number) => { return 0.25 * km }
}

//console.log("gol",gol.combustivelGasto(30))
//console.log("uno",uno.combustivelGasto(34))