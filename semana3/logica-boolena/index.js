
// PRIMEIRA ATIVIDADE

const bool1 = true
const bool2 = false
const bool3 = !bool2    
    // "variaveis" que sao escritas "const" não mudam ou seja SÃO CONSTANTES.

let resultado = bool1 && bool2 && bool3
    // let é uma variável de escolo local

    console.log("a. ", resultado)
    //o resultado no console foi FALSE pois apenas o bool1 é TRUE.


    resultado = (bool2 || bool1) && !bool3
    console.log("b. ", resultado)
    //o resultado no console foi FALSE embora o resultado do ()tenha sido TRUE, bool3 é FALSE

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)
    //o resultado é TRUE pois o "!resultado" é TRUE (Ja que o ultimo tinha sido false), e o resultado do ()tambem foi TRUE

    resultado = (resultado && (!bool1 || bool2)) && !bool3
    console.log("d. ", resultado)
    
    /*    Como diria o Jack Estripador "Vamos por partes", que nem se sabe q a frase é de sua autoria mesmo rsrs.
    o resultado é FALSE:
    resultado anterior foi TRUE porem entre os () deu FALSE
    e como se não bastasse o !bool3 tambem é FALSE então tapou o caxão!     */
   

    console.log("e. ", typeof resultado)  
    //o typeof declara o tipo da variável, nesse caso é do tipo BOOLEAN pois só se tem duas opções de conclusôes quanso se usa && ou ||


// SEGUNDA ATIVIDADE

let array
    console.log('I. ', array)
    // undefined - não foi criado nenhuma locação para um array
    
    array = null
    console.log('II. ', array)
    // null - foi criado uma array só um espaço na memoria, não sei se são essas as expressoes q se usa, mas a ideia é essa.
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    // .length  - exibe o tamanho da variavel nesse caso a array, e essa tem o tamanho de 11. ao contar da casa zero a dez.
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    /*
        a nova varivael "i" foi declarada com o valor "0" de alguma forma que eu ainda não compreendi como,
        esse valor corresponde ao numero da casa que será exibida, que no caso serão duas casas do array...
        então se o i é casa ZERO o valor dela é 3, e o i+1 é a casa UM então sera exibido o valor declarado nela, valor 4
        ficando assim  na tela:
        IV.  3  e  4
    
     */

    array[i+1] = 19
    // array UM agora tem o valor 19
    const valor = array[i+6]
    // a const valor tem o valor da seção SETE do arrai ou seja o valor 9
    console.log('V. ', array[i+1], " e ", valor)
    // exibirá na tela V.  19  e  9
    
    i+=1 
    // seria o mesmo que i=i+1 ou seja ele 0 + 1 o i tera o valor da seção 1
    array[i] = array[i-1]
    // o i com o valor da seção 1(vale 4) passa a ter o valor da seção 0 que é 3
    console.log('VI. ', array[i])
    // exibirá o valor da seção 0 que é o valor 3
    
    
    i = array.length - 1
    // o i vai receber o valor da casa do resultado da subtração .length = 11 -1 = 10 o valor da casa 10 é 13
    array[i] = array[i-3]
    // o i que valia 13 agora recebe o valor de menos 3 casas passando  valer 10.
    const resultadoC = array[i]%array[1]
    // o resto do valor 10 com o valor da seção 1 que é 3 fica resto de 10%3 
    console.log('VII. ', resultadoC)
    //9 dividito pra 3 resta 1.