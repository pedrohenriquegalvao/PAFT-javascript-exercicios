/*
1. Crie as variáveis peso e altura leia e as inicialize com seu peso e sua altura. Calcule o valor do IMC (peso / altura2).
Associe o valor verdadeiro a variável obeso caso o valor do IMC seja maior ou igual a 30. 
Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis: O valor do IMC para o peso de peso quilos e altura metros é de imc.
*/

const peso = prompt("Digite seu peso em kg: ")
const altura = prompt("Digite sua altura em metros: ")

imc = peso/(altura**2)

if (imc >= 30) {
    obeso = true
}

console.log(`O valor do IMC para o peso de ${peso} quilos e altura de ${altura} metros é de ${imc} `)
