const relogio = document.querySelector('.relogio')
const botaoIniciar = document.querySelector('.iniciar')
const botaoPausar = document.querySelector('.pausar')
const botaoZerar = document.querySelector('.zerar')
let segundos = 0
let timer = null

function iniciaRelogio() {
  if (timer) return
  timer = setInterval(() => {
    segundos++
    relogio.innerHTML = criaHoraDosSegundos(segundos)
  }, 1000)
}

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000)
  return data.toLocaleTimeString('pt-BR', {
    timeZone: 'GMT',
  })
}

botaoIniciar.addEventListener('click', (event) => {
  iniciaRelogio()
  relogio.classList.remove('pausado')
})

botaoPausar.addEventListener('click', (event) => {
  relogio.classList.add('pausado')
  clearInterval(timer)
  timer = null
})

botaoZerar.addEventListener('click', (event) => {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  segundos = 0
  relogio.innerText = '00:00:00'
  timer = null
})
