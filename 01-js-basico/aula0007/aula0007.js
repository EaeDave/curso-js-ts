// Tipos primitivos
// String, number, undefined, null, boolean, symbol
const nome = 'David'; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // undefined -> não aponta para local nenhum na memória.
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória.
const aprovado = true; // true ou false, verdadeiro ou falso.

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

// Arrays
const a = [1, 2];
const b = a;

console.log(a, b); // [ 1, 2 ] [ 1, 2 ]

b.push(3);

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]
