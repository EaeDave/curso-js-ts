try {
  // É executado quando não há erros
} catch (error) {
  // É executado quando há erros
} finally {
  // É executado sempre
}

try {
  console.log('Abri um arquivo')
  console.log('Manipulei um arquivo e gerou erro', teste)
  console.log('Fechei o arquivo')
} catch (error) {
  console.log('Tratando o erro')
} finally {
  console.log('FINALLY: Eu sempre sou executado')
}

function retornaHora(data) {
  if (!(data instanceof Date)) {
    console.log('O parâmetro deve ser do tipo Date')
    throw new TypeError('O parâmetro deve ser instância de Date.')
  }

  //   return `${data.getHours()}:${data.getMinutes()}`
  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

console.log(`Hora retornada para a data informada: ${retornaHora(new Date())}`)
console.log(`Hora retornada para a data informada: ${retornaHora(new Date('01-01-1970 12:00'))}`)

try {
  console.log(`Hora retornada para a data informada: ${retornaHora(12)}`)
} catch (error) {
  console.log('Ocorreu um erro: ', error)
} finally {
  console.log('Fim')
}
