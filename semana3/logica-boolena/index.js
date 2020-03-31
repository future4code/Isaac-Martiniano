

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
    // O i vai receber o valor da casa do resultado da subtração .length = 11 -1 = 10 o valor da casa 10 é 13
    array[i] = array[i-3]
    // O i que valia 13 agora recebe o valor de menos 3 casas passando  valer 10.
    const resultadoC = array[i]%array[1]
    // O resto do valor 10 com o valor da seção 1 que é 3 fica resto de 10%3 
    console.log('VII. ', resultadoC)
    // 9 dividito pra 3 resta 1.


/*

    A. O QUE É array E COMO SE DECLARA NO JS?
        
        É um tipo de variável que posso falar que seja especial por armazenar varios valores simultaneamente e se declara com [] colchetes
    
    B. QUAL O INDEX INICIAL DE UM array?

        [0]
    
    C. COMO SE IDENTIFICA O TAMANHO DE UM array?

        .length

    D. INDIQUE TODAS AS MENSAGENS IMPRESAS NO CONSOLE.
        
        a.  false
        b.  false
        c.  true
        d.  false
        e.  boolean
        I.  undefined
        II.  null
        III.  11
        IV.  3  e  4
        V.  19  e  9
        VI.  3
        VII.  1

*/
//  a. alcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

    let GRAUS_FAHRENHEIT = 77
    let KELVIN = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
    console.log('A conversão dos ' +GRAUS_FAHRENHEIT+'ºF em Kelvin são '+KELVIN+'K ' )
    // console: Os 77ºF em Kelvin são 298.15K 

//  b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

    let GRAUS_CELSIUS = 80
    let FAHRENHEIT = (GRAUS_CELSIUS*9/5) + 32
    console.log('A conversão dos '+GRAUS_CELSIUS+'ºC em Fahrenheit é '+FAHRENHEIT+'ºF' )
    //console: A conversão dos 80ºC em Fahrenheit é 176ºF

//  c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.    

    let CELSIUS = 30
    let grausFahrenheit = (CELSIUS*9/5) + 32
    let tempKelvin = CELSIUS + 273.15
    console.log(typeof(CELSIUS))
    console.log('A conversão dos '+CELSIUS+'ºC em Fahrenheit é '+grausFahrenheit+'ºF e os '+CELSIUS+'ºC convertidos em Kelvin é de '+tempKelvin+'º' )

//  c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.    

    let grauCeusius = parseFloat(prompt('Digite a temperatua em celsius'))
    console.log(typeof(grauCeusius))
    let gFahrenheit = (grauCeusius*9/5) + 32
    let tKelvin = grauCeusius + 273.15;
    
    console.log('A conversão dos '+grauCeusius+'ºC em Fahrenheit é '+gFahrenheit+'ºF e os '+grauCeusius+'ºC convertidos em Kelvin é de '+tKelvin+'º' )

// 2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:

    let nome = prompt('Qual é seu nome?')
    console.log('Resposta: '+nome)

    let idade = prompt('Qual é sua idade?')
    console.log('Resposta: '+idade)

    let profissao = prompt('Qual é sua profissão?')
    console.log('Resposta: '+profissao)

    let sonho = prompt('Um sonho?')
    console.log('Resposta: '+sonho)

    let aprendeu = prompt('O que você mais aprendeu com seus pais?')
    console.log('Resposta: '+aprendeu)

    let arvore = prompt('Quando foi a última vez que você subiu uma árvore?')
    console.log('Resposta: '+arvore)

//  3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar
//  o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05.
//  Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

    let consumo = parseFloat(prompt('Consumo do Qw/h'))
    valorreal = consumo*0.05
    console.log('Sua fatura é de R$' +valorreal+' pague em dia, evite corte.') 

    //    a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

    let consumo2 = 280
    valorreal2 = consumo2*0.05
    console.log('A fatura da residência é R$' +valorreal2+' pague em dia, evite corte.') 

//    b. Altere o programa para receber mais um valor: a porcentagem de desconto. 
//    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
   
let consumo3 = 280
let valorreal3 = consumo3*0.05
let desconto = valorreal3-(valorreal3*15/100)
    console.log('A fatura da residência é R$' +valorreal3+' porem com 15% de desconto ficou em R$'+desconto+'pague em dia, evite corte.') 