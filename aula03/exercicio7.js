/*
Escreva a versão não recursiva e a 
recursiva de uma função para calcular o n-
ésimo termo da sequencia de fibonnaci:

1,𝑠𝑒 𝑛 = 0
1,𝑠𝑒 𝑛 = 1
𝑓𝑖𝑏 𝑛 −1 +𝑓𝑖𝑏(𝑛 −2), 𝑠𝑒 𝑛 > 1

Ex.: Fib(6) = 13, pois:
1,1,2,3,5,8,13,21...
*/

function Fib1(n){
    let n1 = 1
    let n2 = 1
    let result = n1
    for (let i = 2; i <= n; i++) {
      result = n1 + n2
      n1 = n2
      n2 = result
    }
    return result
  }
  
  function Fib2(n) {
    if (n <= 1) return 1
    return Fib2(n-1) + Fib2(n-2)
  
  }
  
  const Fib3 = n => n <=1 ? 1 : Fib3(n-1) + Fib3(n-2)
  
  console.log(Fib2(6))