/*
Crie a função justDate que recebe uma data e retorna a mesma data, mas com os campos de tempo zerados
*/

function justDate(data) {
    data.setHours(0)
    data.setMinutes(0)
    data.setSeconds(0)
    data.setMilliseconds(0)
    return data
  }
  
  ////getHours, minutes, seconds e milliseconds()
  const data = new Date();
  console.log(justDate(data))
  
  
  