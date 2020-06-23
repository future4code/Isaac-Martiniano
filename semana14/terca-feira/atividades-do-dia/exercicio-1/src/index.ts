// Aula 45 - Node e package.json
// Exercício 1

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
// Resposta: atravéz do (process.argv[ e aqui vai a posição que está ou estão os parametros ])

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, 
// imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

// const nome: string = String(process.argv[2])
// const age: number = Number(process.argv[3])

// const boasVindas: string = `Olá, ${nome}! Você tem ${age} anos.`
// console.log(boasVindas)

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
// "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

function somar(a: number): number{
    return a + 7
}
const nome: string = String(process.argv[2])
const age: number = Number(process.argv[3])
const sevenAfterUs: number = Number(process.argv[3])
const welcome: string = `Olá, ${nome}! Você tem ${age} anos. Em sete anos você terá ${somar(sevenAfterUs)}`
console.log(welcome)

