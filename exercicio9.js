//EXERCICIO 9 - Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba o nome do mês correspondente e quantos dias ele possui. 
// Para fevereiro, pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29 caso seja.

const prompt = require('prompt-sync') ()

let mes = Number(prompt('Escolha um número correspondente à um mês: '))

switch(mes) {
    case 1: 
    console.log(`O mês que você escolheu foi Janeiro, ele possui 31 dias`)
    break

    case 2: 
    console.log("O mês que você escolheu foi Fevereiro")
    let bissexto = prompt("O ano é bissexto?")
    if(bissexto === "sim") {
        console.log("O mês de Fevereiro durante o ano bissexto tem 29 dias")
    } else {
        console.log("O mês de Fevereiro tem 28 dias")
    }
    break

    case 3: 
    console.log("O mês que você escolheu foi Março, ele possui 31 dias")
    break
    
    case 4: 
    console.log("O mês que você escolheu foi Abril, ele possui 30 dias")
    break
    
    case 5: 
    console.log("O mês que você escolheu foi Maio, ele possui 31 dias")
    break
    
    case 6: 
    console.log("O mês que você escolheu foi Junho, ele possui 30 dias")
    break
    
    case 7: 
    console.log("O mês que você escolheu foi Julho, ele possui 31 dias")
    break
    
    case 8: 
    console.log("O mês que você escolheu foi Agosto, ele possui 31 dias")
    break
    
    case 9: 
    console.log("O mês que você escolheu foi Setembro, ele possui 30 dias")
    break
    
    case 10: 
    console.log("O mês que você escolheu foi Outubro, ele possui 31 dias")
    break
    
    case 11: 
    console.log("O mês que você escolheu foi Novembro, ele possui 30 dias")
    break
    
    case 12: 
    console.log("O mês que você escolheu foi Dezembro, ele possui 31 dias")
    break

    default: 
    console.log("Escolha um número de 1 a 12")
}