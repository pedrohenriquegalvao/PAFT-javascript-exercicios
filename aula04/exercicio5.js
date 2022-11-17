/*
Crie uma função que recebe uma data inicial, um número n e um intervalo de tempo. Ela deve retornar uma lista, contando as n próximas datas considerando esse intervalo de tempo.
*/

function dateList(data, n) {
    let dates = []
    for (let i = 1; i <= n; i++) {
      data.setDate(data.getDate() + i)
      dates.push(data)
    }
    return dates
  }
  
  const data = new Date()
  console.log(dateList(data, 3))