/*
Crie uma lista com alguns valores e imprima:
  - Os valores positivos
  - A média de todos os valores
*/

const valores = [1, 5, 2, -5, 8, 30, -2, 15, -20]
let positivos = []
let soma = 0

for (let valor of valores) {
  if (valor >= 0) {
    positivos.push(valor)
  }
  soma += valor
  
}

let media = (soma / valores.length).toFixed(2)
console.log(`Média: ${media}`)
console.log(`Positivos: ${positivos}`)
