let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
// Atribuição via desestruturação de arrays
[a, b, c] = letras;

console.log(a, b, c);
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);

// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);

// rest operator ...
const [primeiroNumero, segundoNumero, terceiroNumero, ...restoDosNumeros] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(restoDosNumeros.join(', '));

const listas = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
const [listaUm, listaDois, listaTres] = listas;

console.log(listaUm);
console.log(listaDois);
console.log(listaTres);
