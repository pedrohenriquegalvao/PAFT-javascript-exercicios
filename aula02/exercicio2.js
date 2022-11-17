/*
Crie uma lista com 15 pessoas lendo seu nome e cor
  - As cores podem ser: "nranco", "negro", "pardo" ou "outro"
Em seguida, mostre quantas pessoas tem de cada cor
Tente resolver esse problema sem usar uma cadeia de "ifs" ou switch.
*/

/* const pessoas = []

for (let i = 0; i <= 15; i++) {
   let pessoa = {}
   let nome = prompt('Nome: ')
   let cor = prompt('Cor: ')
   pessoa.nome = nome
   pessoa.cor = cor
   pessoas.push(pessoa)
 } 

console.log(pessoas)*/

const pessoas = [
    {nome: 'Pedro', cor:'Branco'},
    {nome: 'Leonardo', cor:'Pardo'},
    {nome: 'Mark', cor:'Outro'},
    {nome: 'Jorge', cor:'Negro'},
    {nome: 'Eliane', cor:'Outro'},
    {nome: 'Sheila', cor:'Pardo'},
    {nome: 'Maria', cor:'Pardo'},
    {nome: 'Paula', cor:'Branco'},
    {nome: 'Luiz', cor:'Negro'},
    {nome: 'Regina', cor:'Negro'},
    {nome: 'Gustavo', cor:'Pardo'},
    {nome: 'Vinicius', cor:'Branco'},
    {nome: 'Débora', cor:'Branco'},
    {nome: 'Matheus', cor:'Pardo'},
    {nome: 'Nicolas', cor:'Negro'}
  ]
  
  function isBranco(pessoa) {
    return pessoa.cor === 'Branco'
  }
  
  function isPardo(pessoa) {
    return pessoa.cor === 'Pardo'
  }
  
  function isNegro(pessoa) {
    return pessoa.cor === 'Negro'
  }
  
  function isOutro(pessoa) {
    return pessoa.cor === 'Outro'
  }
  
  
  const brancos = pessoas.filter(isBranco)
  let qtdeBrancos = brancos.length
  console.log(`Pessoas brancas: ${qtdeBrancos}`)
  
  const pardos = pessoas.filter(isPardo)
  let qtdePardos = pardos.length
  console.log(`Pessoas pardas: ${qtdePardos}`)
  
  const negros = pessoas.filter(isNegro)
  let qtdeNegros = negros.length
  console.log(`Pessoas negras: ${qtdeNegros}`)
  
  const outros = pessoas.filter(isOutro)
  let qtdeOutros = outros.length
  console.log(`Pessoas que indicaram outra cor: ${qtdeOutros}`)
  
  
  