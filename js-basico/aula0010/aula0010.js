let primeiraString = 'Um "texto"';
let segundaString = "Um 'texto'";
let terceiraString = '"Uma outra string"';
// \ A barra invertida é um caractere de escape

// strings são indexáveis e iteráveis
console.log(primeiraString.charAt(0)); // index 0
console.log(primeiraString[0]); // index 0

// Método concat() de string, equivalente ao +
const meuTexto = 'Um';
console.log(meuTexto + ' lindo dia'); // Concatenção convencional
console.log(meuTexto.concat(' lindo dia')); // Usando o método
console.log(`${meuTexto} lindo dia`); // Usando template literals (template strings)

const minhaFrase = 'Olá, amigo!';
console.log(minhaFrase.indexOf('amigo')); // Começa no índice x da palavra
// lastIndexOf começa de trás pra frente
console.log(minhaFrase.lastIndexOf('l'));

console.log(minhaFrase.match(/[a-z]/g)); // O método match aceita expressões regulares e retorna um array da lógica, nesse exemplo, todas as letras minúsculas de a-z

// Pode ou não usar expressões regulares no método replace()
console.log(minhaFrase.replace('Olá', 'Oi'));

// .length é uma propriedade que retorna a qtd de caracteres da string
console.log(minhaFrase.length); // 11

// O método .slice() é possível "fatiar" a string, ou seja, retorna uma parte da string de acordo com o índice inicial e final especificado.
console.log(minhaFrase.slice(5));

const fraseDoRato = 'O rato roeu a roupa do rei de roma';
console.log(fraseDoRato.split(' ')); // Separa cada "palavra" de acordo com o caractere split indicado, retorna um array
