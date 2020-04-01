/* -----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
------------------EXERCICIO 01----------EXERCICIO 01---------------EXERCICIO 01-------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
//entrada pelo teclado pedindo um número qualque
const numero = Number(respostaDoUsuario)
//a variável numero recebe a entrada em Numero
if(numero % 2 === 0) {
//se o número recebido quando for dividido por 2 restar 0 entrará no if e exibirá a mensagem abaixo    
  console.log("Passou no teste.")
} else {
//se o numero ao ser dividido por dois existir algum resto entrará no else exibindo a mensagem abaixo    
  console.log("Não passou no teste.")
}

/* -----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
------------------EXERCICIO 02----------EXERCICIO 02---------------EXERCICIO 02-------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*  A. Um programa que mostra o valor de frutas 
    B. console: O preço da fruta  Maçã  é  R$  2.25
    C. R$ 24.55
    D. O preço da fruta  Pêra  é  R$  5
       2
       2
    acredito que esse valor seria do default 
    porem não faço ideia de onde surgiu os outros 2 2 um abaixo do outro   
*/


/* -----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
------------------EXERCICIO 03----------EXERCICIO 03---------------EXERCICIO 03-------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

const numero11 = prompt("Digite o primeiro número.")
const numero22 = prompt("Digite o próximo número?")

if(numero11 > 0 && numero22 > 0) {
  let mensagem
  if(numero11 > numero22) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

/* ERROR apresentado no console:
    Uncaught ReferenceError: mensagem is not defined
    at index.js:75
   O erro alega que a variavel mensagem não foi definida, isso porque ela é uma let e as variavens let
   são variáveis com escopo de bloco, ou seja ao sair do bloco ela morre, diferente das variaver var
   as var tem um escopo abrangente, ou seja ela "vara" o bloco e no caso dessa questão exibiria no
   console: Número 1 é menor ou igual ao 2!
*/ 

/* -----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
------------------EXERCICIO 04----------EXERCICIO 04--------------EXERCICIO 04-------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/
// LETRA A

const numero01 = Number(prompt("Digite o primeiro número."))
const numero02 = Number(prompt("Digite o segundo número."))


    if (numero01 < numero02){
    console.log("os números na ordem decrescente é ",numero02," e ",numero01  )
} else if (numero01 > numero02){
    console.log("os números na ordem decrescente é ",numero01," e ",numero02  )
} else {
    console.log("os números",numero01," e ",numero02, "são iguais" )
}


// LETRA B


const numero001 = Number(prompt("Digite o primeiro número."))
const numero002 = Number(prompt("Digite o segundo número."))
const numero003 = Number(prompt("Digite o terceiro número."))


if((numero001>numero002) && (numero002>numero003)){
    console.log("os números na ordem decrescente é ",numero001," e ",numero002, " e ",numero003)
        } else if ((numero001>numero002) && (numero2<numero003)){
            console.log("os números na ordem decrescente é ",numero001," e ",numero003, " e ",numero002)
                } else if ((numero001<numero002) && (numero002<numero003)){
                    console.log("os números na ordem decrescente é ",numero003," e ",numero002, " e ",numero001)
                        } else if ((numero001<numero002) && (numero002>numero003)){
                            console.log("os números na ordem decrescente é ",numero002," e ",numero001, " e ",numero003)
                                } else if ((numero001<numero003) && (numero002>numero003)){
                                    console.log("os números na ordem decrescente é ",numero003," e ",numero001, " e ",numero002)
                                        } else if ((numero001>numero003) && (numero002>numero003)){
                                            console.log("os números na ordem decrescente é ",numero002," e ",numero003, " e ",numero001)
                                                } else {
                                                    console.log("os números são iguais ",numero001," e ",numero002, " e ",numero003)
                                                        }

//Letra C
const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o segundo número."))
const numero3 = Number(prompt("Digite o terceiro número."))


if((numero1>numero2) && (numero2>numero3)){
    console.log("os números na ordem decrescente é ",numero1," e ",numero2, " e ",numero3)
        } else if ((numero1>numero2) && (numero2<numero3)){
            console.log("os números na ordem decrescente é ",numero1," e ",numero3, " e ",numero2)
                } else if ((numero1<numero2) && (numero2<numero3)){
                    console.log("os números na ordem decrescente é ",numero3," e ",numero2, " e ",numero1)
                        } else if ((numero1<numero2) && (numero2>numero3)){
                            console.log("os números na ordem decrescente é ",numero2," e ",numero3, " e ",numero1)
                                } else if ((numero1<numero3) && (numero2>numero3)){
                                    console.log("os números na ordem decrescente é ",numero3," e ",numero1, " e ",numero2)
                                        } else if ((numero2>numero3) && (numero3>numero1)){
                                            console.log("os números na ordem decrescente é ",numero2," e ",numero1, " e ",numero3)
                                                } else if ((numero1>numero3) && (numero2>numero3)){
                                            console.log("os números na ordem decrescente é ",numero2," e ",numero3, " e ",numero1)
                                                } else {
                                                    console.log("existe pelo menos dois numeros iguais, insira outros, numeros digitados: " ,numero1," e ",numero2, " e ",numero3)
                                                        } 




/* -----------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------
------------------EXERCICIO 05----------EXERCICIO 05--------------EXERCICIO 05-------------------------
--------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------*/

// Letra A: criei uma imagem do diagrama e adicionei um arquivo na pasta de hoje

//Letra B: 

//var  = prompt("Possui osso? responda com s/n")
