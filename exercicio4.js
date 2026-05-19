//EXERCICIO 4 - Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar funções prontas como Math.max().

//Ler três números inteiros: 
const prompt = require('prompt-sync') ();

let numeroUm = parseInt(prompt('Informe o primeiro número: '))
let numeroDois = parseInt(prompt('Informe o segundo número: '))
let numeroTres = parseInt(prompt('Informe o terceiro número: '))

//Exibir o maior deles 
if (numeroUm > numeroDois && numeroUm > numeroTres) {
    console.log(`O número maior é o: ${numeroUm}`)
} else if (numeroDois > numeroUm && numeroDois > numeroTres) {
    console.log(`O número maior é o: ${numeroDois}`)
} else {
    console.log(`O número maior é o: ${numeroTres}`)
}
