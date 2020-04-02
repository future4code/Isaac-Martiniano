/*------01----------------01--------------------01---------------------01-------------------01-----------
 -------------01-------------------01-------------------01-----------------------01----------------------
 ------01----------EXERCICIO 01----------EXERCICIO 01--------------EXERCICIO 01-------01-------01--------
 -------------01-------------------01-------------------01-----------------------01----------------------
 -----01----------------01--------------------01---------------------01-------------------01-------------*/


//O que o código abaixo está fazendo? Qual o resultado impresso no console? 

// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)

// Console: 105

/*
  foi criado uma variável -sum- com valor inicial de -0- 
  criou um laço -for- dentro do laço  criou uma outra variável -i- iniciando em -0-
  e enquanto -i- for menor que 15 o valor de i será somado com +1 e a -sum- receberar
  o valor de -i- dentro d laço atravez do -sum += i- que seria o mesmo que
  -sum = sum + i- (ou seja o valor que -sum- tiver será somdo com o valor que estiver
  em -i-)
  quando -i- estiver valendo 14 que é o ultimo valor abaixo de 15 o laço será 
  interrompido, e exibirá no console a -sum- que estará contendo o valor atua
  de 0 a 14 (0+1+2+3+4+5...+14 = 105) 
*/


/*------02----------------02--------------------02---------------------02-------------------02-----------
 -------------02-------------------02-------------------02-----------------------02----------------------
 ------02----------EXERCICIO 02----------EXERCICIO 02--------------EXERCICIO 02-------02-------02--------
 -------------02-------------------02-------------------02-----------------------02----------------------
 -----02----------------02--------------------02---------------------02-------------------02-------------*/





//Leia o código abaixo:

    // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    // const novaLista = []
    // const numero = 3
    // for(const item of lista){
    //   if(item%numero === 0) {
    //     novaLista.push(item)
    //   }
    // }
    // console.log(novaLista)

//  a. O que o comando `.push` faz?

/*
    R. o comando -.push- faz com que variavel(array) que o antecede (nesse caso a -novaLista-)
    receba o valor que estar na variável dentro do parenteses (nesse caso ficou -(item)-)
    
*/

// b. Qual o valor impresso no console?

/*
    R. o valor impresso no console é: (4) [10, 15, 25, 30]
    (4) = quantidade de index que contem o array -novaLista-
    [10, 15, 25, 30]= os valores contidos em cada index da mesma
    
*/

// c. Qual **seria** imprimido no console se a variável `numero`
// tivesse o valor de `3`?

/*
    R. o valor impresso no console é: (6) [12, 15, 18, 21, 27, 30]
    (6) = quantidade de index que contem o array -novaLista-
    [12, 15, 18, 21, 27, 30] = os valores que ao dividir por 3 não restou nada
     contidos em cada index da mesma.    
*/

//E se tivesse o valor de `4`?

/*
    R. o valor impresso no console é:  [12]   


/*------03----------------03--------------------03---------------------03-------------------03-----------
 -------------03-------------------03-------------------03-----------------------03----------------------
 ------03----------EXERCICIO 03----------EXERCICIO 03--------------EXERCICIO 03-------03-------03--------
 -------------03-------------------03-------------------03-----------------------03----------------------
 -----03----------------03--------------------01---------------------03-------------------03-------------*/

// EXERCÍCIO 03
// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original')
// que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta
// final de cada programa individualmente.




// a. Escreva um programa que devolva o maior e o menor números contidos no array original

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     let menor = arrayOriginal[2]
//     let maior = arrayOriginal[5]
//     for(let i =0; i < arrayOriginal.length; i++){
//       const elemento = arrayOriginal[i]
          
//       if(elemento>maior) {
        
//         maior = elemento
//       }
//       else if (elemento<menor) {
//         menor = elemento
//       }
//     }
//     console.log(" O maior número é ",maior, " e o menor é ",menor)

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.


// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novaArray = []
       
//     for(let item of arrayOriginal){
//         novaArray.push(item/10)
//     }
//     console.log(novaArray)

    

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

//  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//  let novaArray = []
//  divisor = 2
       
//      for(let item of arrayOriginal){
//        if (item%divisor === 0)

//         novaArray.push(item)
//      }
//      console.log(novaArray)


// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let novaArray = []

// for(let i =0; i < arrayOriginal.length; i++){
//   novaArray.push("O elemento do index " +i+ " é o número " +arrayOriginal[i])
// }
// console.log(novaArray)


// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO
// DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO DESAFIO



const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
// console :
 //0
 //00
 //000
 //0000




