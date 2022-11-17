/*
Crie a função maior, que encontre o maior entre todos os valores passados em seus argumentos.

console.log(maior(1,10,-1,5)); //Imprime 10
console.log(maior(1,-100,5)); //Imprime 5
*/

function maior(...valores) {
    let maior = valores[0]
    for (let valor of valores) {
      if (valor >= maior)
        maior = valor
    }
    return maior
  }
  
  console.log(maior(1,10,-1,5))
  console.log(maior(1,-100,5))