/*
Crie as funções de comparação de datas: before e after. Adicione um parâmetro opcional inclusive com valor padrão false que permite considerar também a própria data
*/
const hoje = new Date()
function before(data, incluir = false) {
  
  const dataAtual = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())
  data.setMonth(data.getMonth() - 1)
  
  if (!incluir) data.setDate(data.getDate() - 1)

  if (dataAtual > data) {
    console.log("A data recebida é anterior a data atual")
  } else if (dataAtual < data) {
    console.log("A data recebida não é anterior a data atual")
  } else {
    console.log("A data recebida é igual a data atual.")
  }
}

function after(data, incluir = false) {
  
  const dataAtual = new Date()

  if (!incluir) data.setDate(data.getDate()-1)
  
  if (data > dataAtual) {
    console.log("A data recebida é posterior a data atual")
  } else{
    console.log("A data recebida não é posterior a data atual")
  }
}

console.log("-------- BEFORE ------")
const data1 = new Date(2022, 10, 15)
before(data1)
before(data1, true)

console.log("-------- AFTER ------")
const data2 = new Date(2022, 10, 14)
after(data2)
after(data2, true)