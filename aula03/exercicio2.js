/*Crie uma funcao chamada menos. Caso seja passado apenas 1 parametro, retorne o valor negativo. Caso sejam passados 2, retorne a subtracao dos dois*/

function menos(...valores){
    if (valores.length === 1) return - valores[0]
    else return valores[0] - valores[1]
  }
  
  //Passando apenas 1 parametro
  console.log(menos(10))
  //Passando 2 parametros
  console.log(menos(5, 2))
  
  
  function menos2(a, b) {
    if (b === undefined) {
      return -a
    }
    return a-b
  }
  
  console.log(menos2(5,2))
  