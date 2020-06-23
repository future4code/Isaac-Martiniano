// Aula 45 - Node e package.json
// Exercício 2

// Crie uma aplicação Node que recebe uma string representando uma operação matemática
// e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada
// utilizando os 2 valores fornecidos.

const nome: string = String(process.argv[2])
const num1: number = Number(process.argv[3])
const num2: number = Number(process.argv[4])

const resultado = (nome: string): number => {
    switch(nome){
    case "add":
        return (num1 + num2)
    case "sub":
        return (num1 - num2)
    case "mult":
        return (num1 * num2)
    case "div":
        return (num1 / num2)       
    default:
        return (num1)    
    }
}    
    console.log(`Resposta ${resultado(nome)}`)