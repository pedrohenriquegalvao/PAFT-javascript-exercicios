/*
Crie uma função que receba uma lista de objetos e um campo, e retorne uma lista com todos os valores desse campo sem repetição
*/

function getFieldValues(pessoas, campo) {
    let values = []
    for (let pessoa of pessoas) {
      if (!values.includes(pessoa[campo]))
      values.push(pessoa[campo])
    }
    return values
  }
  
  const pessoas = [
    {nome: "Pedro", idade: 30}, 
    {nome: "Marcos", idade: 56},
    {nome: "Enzo", idade: 10},
    {nome: "Pedro", idade: 19}
  ]
  
  console.log(getFieldValues(pessoas, "nome"))
  console.log(getFieldValues(pessoas, "idade"))
  
  
  
  function getFieldValues2(valores, campo) {
    const resultados = {}
    for (const valor of valores) {
      resultados[valor[campo]] = true
    }
    return Object.keys(resultados)
  }
  
  console.log(getFieldValues2(pessoas, "nome"))
  console.log(getFieldValues2(pessoas, "idade"))
  