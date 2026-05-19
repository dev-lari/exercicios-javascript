//EXERCICIO 5 - Uma loja oferece desconto progressivo conforme o valor da compra. Faça um programa que leia o valor total de uma compra e aplique as seguintes regras: 
// compras abaixo de R$ 100,00 não têm desconto;
// compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto;
// compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto; 
// compras acima de R$ 500,00 recebem 20% de desconto. 
// Exiba o valor original, o desconto aplicado e o valor final a pagar.

const prompt = require('prompt-sync')()

let valorCompra = parseFloat(prompt('Informe o valor da sua compra: '))

if (valorCompra >= 100.00 && valorCompra <= 299.99) {
    valorDesconto = (valorCompra * 10) / 100
    valorFinal = valorCompra - valorDesconto
    console.log(`O valor da sua compra era: R$${valorCompra}, mas foi aplicado um desconto de R$${valorDesconto}`)
    console.log(`O valor da sua compra com o desconto ficou: R$${valorFinal}`)

} else if (valorCompra >= 300.00 && valorCompra <= 499.99) {
    valorDesconto = (valorCompra * 15) / 100
    valorFinal = valorCompra - valorDesconto
    console.log(`O valor da sua compra era: R$${valorCompra}, mas foi aplicado um desconto de R$${valorDesconto}`)
    console.log(`O valor da sua compra com o desconto ficou: R$${valorFinal}`)

} else if (valorCompra >= 500.00) {
    valorDesconto = (valorCompra * 20) / 100
    valorFinal = valorCompra - valorDesconto
    console.log(`O valor da sua compra era: R$${valorCompra}, mas foi aplicado um desconto de R$${valorDesconto}`)
    console.log(`O valor da sua compra com o desconto ficou: R$${valorFinal}`)

} else {
    console.log(`O valor da sua compra é de R$${valorCompra}, não dá direito ao desconto`)
}