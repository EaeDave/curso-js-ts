/**
 * Tipos primitivos (imutáveis):
 * string, number, boolean, undefined, null, (bigint, symbol)
 */

let a = 'A';
let b = a; // Cópia
console.log(a, b); // A A

a = 'Outra coisa'; // Alterando o valor de a, b não muda automaticamente
console.log(a, b); // Outra coisa A

/**
 * Tipos por referência (mutável):
 * array, object, function
 */

let c = [1, 2, 3];
let d = c; // É referenciado o valor com um ponteiro na memória
console.log(c, d); // [1, 2, 3] [1, 2, 3]
c.push(4); // Foi alterado o valor de c, então d mudou automaticamente.
console.log(c, d); // [1, 2, 3] [1, 2, 3]

let e = [...c]; // Copiando explicitamente o valor de um tipo referência usando o operador spread ...
c.pop(); // c = [1, 2, 3]
console.log(e); // [1, 2, 3, 4]

const pessoa = {
	nome: 'David',
	sobrenome: 'Rodrigues',
};

const pessoa2 = pessoa;
pessoa.nome = 'Camila';

console.log(pessoa2);
