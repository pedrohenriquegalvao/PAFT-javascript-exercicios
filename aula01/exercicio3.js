/*
3. Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que Zé seja maior que Chico
*/

let chico = 1.50
let ze = 1.10

while (ze < chico) {
  console.log(`Altura Chico: ${chico.toFixed(2)}m`)
  console.log(`Altura Zé: ${ze.toFixed(2)}m`)
  chico += 0.2
  ze += 0.3
}

console.log("--=-==-=-=-=-=-=-=-=-=-=--")
console.log(`Altura final Chico: ${chico.toFixed(2)}m`)
console.log(`Altura final Zé: ${ze.toFixed(2)}m`)