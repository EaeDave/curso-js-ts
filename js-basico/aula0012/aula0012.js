// * Objeto Math

let num1 = 9.54578;
let num2 = Math.floor(num1); // * Arredondando para baixo
let num3 = Math.ceil(num1); // * Arredondando para cima
let num5 = Math.round(num1); // * Arredonda para o mais próximo
console.log(num2, num3, num5);

const array = [1, 3, 5, 9];
console.log(Math.max(1, 2, 3, 4, -50, 10)); // * Retorna o maior de uma sequência numérica.
console.log(Math.min(1, 2, 3, 4, -50, 10)); // * Retorna o menor de uma sequência
console.log(Math.random()); // * Retorna um número aleatório entre 0 e 1.
const aleatorio = Math.random() * (10 - 5) + 5; // * Entre 10 e 5
console.log(aleatorio.toFixed(0)); // * Formatando para ter somente inteiros.
console.log(Math.round(aleatorio)); // * Outra forma de fazer a mesma coisa.
