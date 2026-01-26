// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  // Funções com retorno podem armazenar algum valor em uma variável
  return a + b
}

function soma2(a, b) {
  // Essa não retorna nada
  console.log(a + b)
}

const s1 = soma(2, 5)
console.log(s1)

const s2 = soma2(2, 5)
console.log(s2) // undefined

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome }
}

const p1 = criaPessoa('David', 'Rodrigues')
console.log(p1)

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
