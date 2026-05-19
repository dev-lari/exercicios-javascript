//EXERCICIO 3 - Escreva um programa que pergunte o salário mensal de um funcionário e o percentual de aumento concedido pela empresa. 
// Caso o salário seja menor que R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. 
// Exiba o novo salário do funcionário.

const prompt = require('prompt-sync')();

//Perguntar o salário e o percentual:
let salario = parseFloat(prompt("Informe o seu salário: "));
let aumento = Number(prompt("Informe o percentual de aumento: "));

//Se menor que 1.500, percentual deve ser dobrado:
if (salario < 1500.00) {
    aumento = aumento * 2
}

//Novo salário do funcionário
let valorDoAumento = salario * (aumento/100);
let novoSalario = salario + valorDoAumento;

console.log(`O seu novo salário é: ${novoSalario.toFixed(2)}`)