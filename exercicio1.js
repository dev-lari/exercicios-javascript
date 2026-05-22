// EXERCICIO 1 - Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o aluno foi Aprovado (nota maior ou igual a 7), 
// em Recuperação (nota entre 5 e 6.9) ou Reprovado (nota menor que 5).

//Perguntar a nota do aluno: 
const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Informe uma nota: "));

if (nota >= 7) {
    console.log("Parabéns! Você foi aprovado(a)")
} else if (nota >= 5 && nota <= 6.9) {
    console.log("Você está de recuperação!")
} else {
    console.log ("Que pena! Você foi reprovado(a)")
}