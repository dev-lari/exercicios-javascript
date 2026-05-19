//EXERCICIO 8 - Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) 
// usando switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. 
// A borda recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido. 

const prompt = require('prompt-sync')()

console.log ('-------------- BEM VINDO À PIZZARIA DA LARI --------------')
console.log ('               1- Tamanho P (4 pedaços - pequena)               ')
console.log ('               2- Tamanho M (6 pedaços - média)               ')
console.log ('               3- Tamanho G (8 pedaços - grande)               ')

let tamanho = parseInt(prompt('Escolha o tamanho da pizza: '))
let precoTotal

switch(tamanho) {
    case 1: 
        precoTotal = 25.00
        break;

    case 2:
        precoTotal = 35.00
        break;

    case 3: 
        precoTotal = 45.00
        break;

    default: 
        console.log("Escolha uma opção válida!")
        break;
}

console.log ('-------------- OPÇÕES DE BORDA: --------------')
console.log ('               1- Tradicional (Grátis)              ')
console.log ('               2- Recheada (+ R$8,00)               ')

let borda = parseInt(prompt('Escolha o tipo da borda:'))

if (borda ===2) {
    precoTotal += 8.00
}

console.log(`O valor total do pedido deu: R$${precoTotal}`)