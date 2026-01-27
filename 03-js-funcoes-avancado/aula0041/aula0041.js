let nome = 'David'

function falanome() {
  // Escopo léxico, a variável nome não está no escopo da função, porém está no escopo global
  console.log(nome)
}

function usaFalaNome() {
  nome = 'Jooj'
  falanome()
}

falanome()
usaFalaNome()
