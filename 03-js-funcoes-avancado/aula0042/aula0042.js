function retornaFuncao() {
  const nome = 'David'
  return function () {
    return nome
  }
}

const funcao = retornaFuncao()
console.log(funcao())
