/*
Crie a função between que recebe uma data, uma data de inicio, outra de fim e uma terceira data. Teste se a data está no meio desse intervalo. Adicione um objeto desestruturado opcional no quarto parâmetro para permitir os parâmetros opcionais inclusiveStart e inclusiveEnd
*/

function between(inicio, fim, data, {inclusiveStart = false, inclusiveEnd = false} = {}) {
    if (inclusiveStart) {
      inicio.setDate(inicio.getDate() + 1)
    } 
    if (inclusiveEnd) {
      fim.setDate(fim.getDate() + 1)
    }
    if (data > inicio && data < fim) {
      return "A data recebida está entre a data inicial e a data final"
    } else {
      return "A data recebida não está entre a data inicial e final"
    }
  }
  
  dataInicio = new Date(2022, 9, 15, 00, 00, 00)
  dataFim = new Date(2022, 11, 15, 00, 00, 00)
  data = new Date()    
  
  console.log(between(dataInicio, dataFim, data, {inclusiveStart: true, inclusiveEnd: true}))
  