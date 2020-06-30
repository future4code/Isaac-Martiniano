//  EXERCÍCIO DA TARDE.
//  ---------------------
//  ----------------------------------------------------------------------------------------------------
//  ----------------------------------------------------------------------------------------------------

//  EXERCÍCIO 2
// Faça uma função que receba dois números como parâmetros e imprima no terminal, 
// as seguintes informações:

// a) A soma desses números

const num1: number = 45
const num2: number = 35
function soma(a: number, b: number): number {
   return a + b;
}
function sub(a: number, b: number): number {
    return a - b;
 }
 function mult(a: number, b: number): number {
    return a * b;
 }
 function maior(a: number, b: number): number {
    if (a > b){
        return a
    } else
        return b
 }
//LETRA A
    console.log(`A Soma é: ${soma(num1, num2)}`)
//LETRA B
    console.log(`A Subtração é: ${sub(num1, num2)}`)
//LETRA C
    console.log(`A Multiplicação é: ${mult(num1, num2)}`)
    console.log(`O maior é: ${maior(num1, num2)}`)


