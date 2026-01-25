function funcao() {
  console.log('Oie')
  // Funções declaradas com function, armazenam todos os argumentos
  // Em um array, mesmo não declarando nenhum parâmetro
  console.log(arguments)
}

// Mesmo uma função sem parâmetros, argumentos passam despercebidos
funcao('Valor', 12345)

function somar() {
  let total = 0
  for (const numero of arguments) {
    total += numero
  }
  console.log(total)
}

somar(5, 5, 5)

function funcaoComParametroEValorDefinido(a, b = 5) {
  console.log(a + b)
}

funcaoComParametroEValorDefinido(5) // 10

function calculadora(operador, acumulador, ...numeros) {
  if (operador === '+') {
    for (const numero of numeros) {
      acumulador += numero
    }
    console.log(acumulador)
  }
  if (operador === '-') {
    for (const numero of numeros) {
      acumulador -= numero
    }
    console.log(acumulador)
  }
  if (operador === '*') {
    for (const numero of numeros) {
      acumulador *= numero
    }
    console.log(acumulador)
  }
  if (operador === '/') {
    for (const numero of numeros) {
      acumulador *= numero
    }
    console.log(acumulador)
  }
}

calculadora('+', 0, 5, 5, 2)
calculadora('-', 0, 5, 5, 2)
