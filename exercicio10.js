//EXERCICIO 10 - Um estacionamento cobra por faixas de tempo. Faça um programa que leia quantas horas um veículo ficou estacionado e, 
// usando switch case com intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora = R$ 6,00; 3ª hora = R$ 4,00; 
// acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

const prompt = require('prompt-sync')()

let tempo = parseInt(prompt('Você ficou quantas horas estacionado?'))
let valorPagar = 0

switch(true){
    case (tempo === 1):
        valorPagar = 8.00
        break

    case (tempo === 2):
        valorPagar = 6.00
        break

    case (tempo === 3):
        valorPagar = 4.00
        break
    
    case (tempo > 3):
        let horasAdicionais = tempo - 3
        valorPagar = 4 + (horasAdicionais * 2)
        break

    default:
        console.log("Tempo inválido")
    }

    console.log(`O tempo total foi ${tempo}h`)
    console.log(`O valor a ser pago é de R$${valorPagar.toFixed(2)}`)