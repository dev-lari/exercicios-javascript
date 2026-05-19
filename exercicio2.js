// EXERCICIO 2 - Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule sua idade. 
// Com base na idade, exiba se ela é criança (até 12 anos), adolescente (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).

const prompt = require('prompt-sync') ();

let anoDeNascimento = Number(prompt("Informe seu ano de nascimento: "));
let idade = (2026 - anoDeNascimento);

if (idade <= 12) {
    console.log(`Você é uma criança com ${idade} anos`)
} else if (idade >= 13 && idade <= 17) {
    console.log(`Você é um adolescente com ${idade} anos`)
} else if (idade >= 18 && idade <= 59) {
    console.log(`Você é um adulto com ${idade} anos`)
} else {
    console.log(`Você é uma pessoa idosa com ${idade} anos`)
}