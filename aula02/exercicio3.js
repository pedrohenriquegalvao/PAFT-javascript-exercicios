/*
Crie o jogo de adivinhar um número de 1 até 100.•Caso ele entre um número maior escreva “Maior”
  •Caso ele entre um número menor escreva “Menor”
  •Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e acabe o jogo
  •O jogo deve perguntar até o usuário desistir ou falar o valor correto.
*/
const numero = Math.floor(Math.random() * 100) + 1;

console.log("Um número de 1 a 100 foi sorteado, tente adivinhá-lo.")
console.log("Obs: Digite 0 ou um número fora desse intervalo para desistir.\n")

let palpite = prompt("Qual o palpite da vez? ")

while (palpite !== numero) {
  if (palpite <= 0 || palpite > 100) {
    console.log("Desistiu?")
    break
  } else if (palpite < numero){
    console.log("Maior hein")
  } else if (palpite > numero) {
    console.log("Menor hein")
  } else {
    console.log("/---------------------------------/")
    console.log("Você acertou!!! O numero era", numero)
    break
  }
  console.log("")
  palpite = prompt("Qual o palpite da vez? ")
}

console.log("Fim do jogo.")