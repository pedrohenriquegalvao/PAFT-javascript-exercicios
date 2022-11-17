/*
Crie uma função mapear que aceite um array e uma função de 
mapeamento. Essa função recebe um elemento do array, realiza sobre ele 
qualquer cálculo, retornando outro. 

•Exemplo:
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro); //[2,4,6,8]
*/

function mapear(lista, funcao) {
    let filtrada = []
    for (let x of lista) {
       filtrada.push(funcao(x))
      }
    return filtrada
  }
  
  const dobro = mapear([1,2,3,4], x => x * 2);
  console.log(dobro); 
  
  const metade = mapear([2,4,6,8], x => x / 2)
  console.log(metade); 
  