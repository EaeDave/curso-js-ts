function retornaHoraAtual() {
  const data = new Date()

  return data.toLocaleTimeString('pt-BR')
}

console.log(retornaHoraAtual())

function funcaoDoInterval() {
  console.log(retornaHoraAtual())
}

const timer = setInterval(funcaoDoInterval, 1000)

setTimeout(() => {
  clearInterval(timer)
}, 5000)
