/*
Crie a função verbose que recebe uma função como parâmetro e retorna outra, que imprime no console toda chamada que for feita na função original com seu resultado.  

Exemplo:
const soma = (a, b) => a + b;
const sum = verbose(soma);
sum(5,2); //Imprime soma(5,2) = 10


Dicas: 
•A função join de uma lista pode ser usada para transforma-la em uma string separada por vírgula:  valores.join(",");
•Além disso, variáveis de função possuem a propriedade name que imprimem o seu nome no momento da declaração.
*/


function verbose(funcao) {
    resultado = funcao
    
    return function () {
      console.log(funcao.name)
      console.log(funcao.length)
      console.log(funcao())
    }
  }
  
  const soma = (a, b) => a + b;
  const sum = verbose(soma);
  sum(5,2);
  
  
  function verbose2(funcao) {
    return function (...values) {
      const result = funcao(...values) 
      console.log(`${funcao.name}(${values.join(",")}) = ${result}`)
      return result
    }
  }
  
  const soma2 = (a, b) => a + b;
  const sum2 = verbose2(soma);
  sum2(5,2);