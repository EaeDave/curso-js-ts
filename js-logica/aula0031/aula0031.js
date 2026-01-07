const qtdVezesRepetirOLaco = 10
let repeticaoInicial = 1

while (repeticaoInicial <= qtdVezesRepetirOLaco) {
  console.log(repeticaoInicial)
  repeticaoInicial++
}

function random(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

let rand = random(1, 50)
console.log(rand)

do {
  console.log('OI')
  rand = random(1, 50)
} while (rand != 10)
