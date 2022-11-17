/*
Crie a função Collatz que aceita como parâmetro o elemento inicial da 
sequencia de Collatz e retorna uma função. A cada chamada dessa função, 
retorne o próximo elemento da sequencia.

const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1

Se o número n for par, o próximo é n / 2
Se for ímpar é 3n+1
A sequencia termina em 1
*/

function collatz(num) {
    let valor = num
      return function() {
        if (valor % 2 === 0) {
          return valor /= 2
        } else {
          return valor = (3 * valor) + 1
        }
      }
  }
  
  const seq = collatz(5);
  console.log(seq()); 
  console.log(seq()); 
  console.log(seq()); 
  console.log(seq()); 
  console.log(seq()); 