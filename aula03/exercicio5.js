/*
Escreva sua própria versão da função join. Esta função recebe uma lista e um separador (por padrão ",") e gera o texto dos objetos em seu interior separados por esse separador. Não se esqueça que o separador não ocorre após o último objeto da lista

*/

function join(lista, separador){
    if (separador == "") separador = ","
    let result = ""
    let c = 0
    for (let valor of lista) {
      result += valor.toString() 
      if (c < lista.length - 1)
        result += separador
      c ++
    }
    return result
  }
  
  console.log(join([1,2,4,4], "-"))
  console.log(join([1,15,1,67], ""))
  
  
  
  function join2(lista, separador = ","){
    let result = `${lista[0]}`
    for (let i = 1; i < lista.length;i++) {
      result += `${separador}${lista[i]}`
    }
    return result
  }
  
  console.log(join2([1,2,4,4], "-"))
  console.log(join2([1,15,1,67]))