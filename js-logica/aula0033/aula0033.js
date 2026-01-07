try {
  console.log(naoExisto)
} catch (err) {
  console.log(`Ocorreu um erro: ${err}`)
}

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error(`"${x}" e "${y}" deveriam ser números.`)
  }
  return x + y
}

try {
  console.log(soma(5, 5))
  console.log(soma(5, 's'))
} catch (err) {
  console.log(`Ocorreu um erro: ${err}`)
}
