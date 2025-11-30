const frutas = ['Pera', 'Uva', 'Maçã'];

// Um for mais simples utilizando for in para iterar sobre elementos
for (const i in frutas) {
  console.log(frutas[i]);
}

const pessoas = {
  nome: 'David',
  sobrenome: 'Rodrigues',
  idade: 24,
};

for (const chave in pessoas) {
  console.log(chave, pessoas[chave]);
}
