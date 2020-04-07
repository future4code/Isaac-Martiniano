
//  console.log("Oi!")
//  function minhaFuncao(quantidade) {
//      for (let i = 1; i <= quantidade; i++) {
//          console.log(i*2)
//      }
//  }
//  minhaFuncao(5)




// function arrayTotal (a, b){
//      const soma = a + b;
//     console.log(soma)
// }
// arrayTotal(11, 12)

// function imprimeArray(array) {
//     for (elemento of array) {
//         console.log(elemento)
//     }

//     return array.length
// }
// const tamanhoDoArray = imprimeArray(['a', 'b', 'c'])
// console.log(tamanhoDoArray)







// function novoTamanhoArray(array){
//     for (conteudo of array) {
//         console.log(conteudo)
//     }
//     return array.length
// }
// const lapaDoArray = novoTamanhoArray(['a', 'b', 'c', 'd', 'e'])
// console.log(lapaDoArray)




// function mostraMeuArray(arraymeu) {
//     for (cadaunidad of arraymeu) {
//         console.log(cadaunidad)
//     }
//     return arraymeu.length
// }
// const arrayTotal = mostraMeuArray(['a', 'e', 'i', 'o', 'u'])
// console.log(arrayTotal)



// let verificaParidade = function(numero) {
//     if (numero%2 === 0){
//         return "É par"
//     }
//     else
//         return "É impar"
// }

// const resultado = verificaParidade(13)
// console.log(resultado)


const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
console.log(minhaFuncao(2))

// console : []

const minhaFuncao1 = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
console.log(minhaFuncao1(5))

// console: [0, 1, 0, 1, 2, 3]

const minhaFuncao2 = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
console.log(minhaFuncao2(8))

// console: [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]



// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas")); //consultando se na array se tem o item "Darvas"
// //console: 0, mostra a posição zero do array
// console.log(funcao(arrayDeNomes, "João"));
// // console: 2, é a posição que se encontra o nome "João"
// console.log(funcao(arrayDeNomes, "Paula"));
// console: undefined, pois esse item nao consta no array.


//o código funcionaria se a lista fosse um array de números (ao invés de um array de string) 
// e o nome fosse um número, ao se chamar a função? Justifique sua resposta.
let arrayDeNumeros = [02, 05, 07, 11, 15, 23, 30];

const funcao = (lista, numero) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, 07));
console.log(funcao(arrayDeNumeros, 15));
console.log(funcao(arrayDeNumeros, 30));
//Sim, pois ele compara o conteudo dos index e mostra em qual posição se encontra,





const array = [1, 2, 3, 4, 5]
let array2 =[]

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      //vai passar por todas posições somando uma com a outra
      resultadoB *= x;
      //vai passar por todas posiçoes multiplicando uma com a outra a iniciar de 1.
    }
  
    arrayFinal.push(resultadoA);
    //o total da soma será um index do arrayFinal
    arrayFinal.push(resultadoB);
    //o total da multiplcação será o segundo index do arrayFinal
    return arrayFinal;
  }
  array2 = metodo(array)
console.log(array2)






// EXERCÍCIO 4    
 let idadeHumana = 4

  function idadeCachorro(idadeHumana) {
      
          return idadeHumana * 7
      }
      idadeCachorro()
  

