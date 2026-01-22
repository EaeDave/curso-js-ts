// * Arrays são indexados, por cada elemento.
const alunos = ['David', 'Camila', 'Liz']; // * Array
console.log(alunos[0]); // David
console.log(alunos[1]); // Camila
console.log(alunos[2]); // Liz
// console.log(alunos[3]); // ! Quando um índice não existe ao buscar um elemento no array, retorna undefined.

alunos[2] = 'Tommy'; // * Alterando o valor de um elemento do array.
console.log(alunos);

console.log(alunos.length); // * Obtendo o tamanho total de elementos do array.
alunos.push('Liz'); // * Adicionando um elemento no final de um array.
console.log(alunos);

alunos.unshift('Naomi'); // * Adicionando um elemento no início de um array.
console.log(alunos);

alunos.pop(); // * Remove o último elemento de um array.
console.log(alunos);

alunos.shift(); // * Remove o primeiro elemento de um array.
console.log(alunos);

console.log(alunos.slice(0, 2)); // * Fatiando somente elementos dentro de um range.

console.log(typeof alunos); // * object (array é um objeto autoindexado em js)
console.log(alunos instanceof Array); // * É um array? true
