/*Crie uma função eCrescente que teste se a lista informada é ou não crescente. A sequencia não será considerada crescente se houver um número menor que seu antecessor imediato*/

function eCrescente(lista) {
    let crescente = true
    let ultimoNumero = lista[0]
    for (let valor of lista) {
      if (valor >= ultimoNumero) {
        ultimoNumero = valor
      } else{
        crescente = false
        break
      }
    }
    return crescente
  }
  
  console.log(eCrescente([1, 2, 3, 4]))
  
  function eCrescente2(numeros) {
    for (const i = 0; i < numeros.length -1; i++) {
      if (numeros[i] > numeros[i+1])
        return false
      }
    return true
  }
  