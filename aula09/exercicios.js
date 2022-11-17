// 1- Para praticar a sintaxe, experimente criar um objeto chamado Circulo com raio 3. 

// 2- Em seguida, programe os métodos para calcular a área (PI*raio*raio) e o perímetro do círculo (2*PI*raio)

/* const pi = 3.14
const Circulo = {
  raio: 3,
  area: function () {
    return pi*this.raio*this.raio
  },
  perimetro: function() {
    return 2*pi*this.raio
  }
}
console.log(Circulo.area())
console.log(Circulo.perimetro()) */

// 3- Altere seu objeto círculo para utilizar a sintaxe com uma função construtora chamada Circulo
/* const pi = 3.14

function Circulo (raio) {
  this.raio = raio
}

Circulo.prototype.area = function () {
  return pi*this.raio*this.raio
}

Circulo.prototype.perimetro = function () {
  return 2*pi*this.raio
}
// 4- Crie 2 círculos de raios diferentes. E imprima sua área e perímetro
const circulo1 = new Circulo(4)
const circulo2 = new Circulo(7)

console.log(circulo1.area())
console.log(circulo1.perimetro())

console.log(circulo2.area())
console.log(circulo2.perimetro()) */



// 5- Refatore o seu código para o círculo utilizar a sintaxe de classes

// 6- Crie o atributo do raio. Torne-o privado.

// 7- Adicione em sua classe um setter em que, caso o raio seja negativo, retire o sinal (um raio setado como -3 se tornaria 3)

const pi = 3.14
class Circulo {
  #raio

  constructor(raio) {
    this.raio = raio
  }

  setRaio (raio) {
    if(raio < 0) {
      console.log("Raio negativo pae, mudando pra positivo")
      raio = raio*-1
    }
    this.raio = raio
  }
  
  area () {
    return pi*this.raio*this.raio
  }
  
  perimetro () {
    return 2*pi*this.raio
  }
  
  static funcao(lista) {
    for(let elemento of lista) {
      
      if(!isNaN(elemento)) {
        console.log(`${elemento}`)
      }
      
    }
  }
  
}

const circulo1 = new Circulo(5)
console.log(circulo1.perimetro())

circulo1.setRaio(-5)
console.log(circulo1.raio)

// 9- Sobreponha o método toString() da sua classe Circulo para imprimi-la como Circulo de raio ${raio}
Circulo.prototype.toString = function () {
  console.log(`Circulo de raio ${this.raio}`)
}

circulo1.toString()

// 10- Crie um método estático criar que aceita uma lista como parâmetro e gera um círculo para cada número positivo em seu interior, ignore os parâmetros que não puderem ser convertidos para números.
const lista = [50,4,1,34,"s"]
Circulo.funcao(lista)
