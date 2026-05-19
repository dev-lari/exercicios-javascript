//EXERCICIO 6 - Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que deseja sacar (múltiplo de 10). 
// O programa deve calcular e exibir a menor quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para compor o saque. 

const prompt = require('prompt-sync')()

console.log("------------------------BANCO DO BRASIL // SEJA BEM VINDO------------------------")

let valor = parseInt(prompt('Digite um valor para sacar que seja múltiplo de 10: R$'))

let cedula100 = Math.floor(valor / 100)
valor = valor % 100

let cedula50 = Math.floor (valor / 50)
valor = valor % 50 

let cedula20 = Math.floor (valor / 20)
valor = valor % 20

let cedula10 = Math.floor (valor / 10)
valor = valor % 10 

console.log (`Saque efetuado com sucesso! Você receberá: ${cedula100} notas de R$100, ${cedula50} notas de R$50, ${cedula20} notas de R$20 e ${cedula10} notas de R$10`)

