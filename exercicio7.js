//EXERCICIO 7 - Faça um programa que funcione como uma calculadora básica. 
// Leia dois números e uma operação desejada (+, -, *, /). 
// Usando switch case, realize a operação correspondente e exiba o resultado. 
// Trate o caso de divisão por zero e de operação inválida.

const prompt = require('prompt-sync')()

let primeiroNumero = parseInt(prompt('Informe o primeiro número: '))
let segundoNumero = parseInt(prompt('Informe o segundo número: '))

console.log ('-----------------ESCOLHA A OPERAÇÃO QUE DESEJA REALIZAR-----------------')
console.log('       1 - Somar             ')
console.log('       2 - Subtrair          ')
console.log('       3 - Multiplicar       ')
console.log('       4 - Dividir           ')

let operacao = parseInt(prompt('Escolha a operação que deseja fazer: '))

switch (operacao) {
    case 1: 
        console.log(primeiroNumero + segundoNumero)
        break;

    case 2:
        console.log(primeiroNumero - segundoNumero)
        break;
    
    case 3: 
        console.log(primeiroNumero * segundoNumero)
        break;

    case 4: 
        if (segundoNumero === 0) {
            console.log('Não é possível dividir o número por 0')
        } else {
            console.log(primeiroNumero / segundoNumero)
        }
        break;
    
    default: 
    console.log('Operação inválida')
    break;

}