falaOi()

// Declaração de função (Function hoisting) - É possível chamar a função antes dela ser declarada
function falaOi() {
  console.log('Oi')
}

// Funções declaradas com const não tem hoisting:
// falaOla() // Gera erro - Cannot access 'falaOla' before initialization.

const falaOla = function () {
  console.log('Olá')
}

// Mesma coisa com funções declaradas usando arrow
// falaAdeus() // Gera erro - Cannot access 'falaAdeus' before initialization.

const falaAdeus = () => {
  console.log('Adeus')
}

// Retornando valores de funções sem a palavra return, usando arrow

// Isso acontece pois não foi usado as chaves {}
const retorneiValor = () => 'Retornado'
console.log(retorneiValor())

const naoRetorneiValor = () => {
  'Não fui retornado'
}

console.log(naoRetorneiValor()) // undefined

// Também é possível executar uma função dentro de outra função, passando como argumento do parâmetro o dado dela
function executaFuncao(funcao) {
  funcao()
}

executaFuncao(falaOi)

const obj = {
  falar: falaOla(),
}

obj.falaOla
