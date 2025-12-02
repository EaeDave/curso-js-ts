const nome = 'David Rodrigues da Silva';

// Iterando sob uma string de forma rápida
for (const letra of nome) {
  console.log(letra);
}

const palavras = ['Rato', 'Galho', 'Distância', 'Vetor', 'Matriz'];

// Iterando sob um array de forma rápida
for (const palavra of palavras) {
  console.log(palavra);
}

// Iterado utilizando o método forEach
palavras.forEach(elemento => {
  console.log(elemento);
});

const pessoa = {
  nome: 'David',
  sobrenome: 'Rodrigues',
};

// Objetos não são iteráveis por padrão
// for (const chave of pessoa) {
//   console.log(chave);
// }
