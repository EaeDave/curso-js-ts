let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 10.5789551255547;
let minhaString = 'Olá';

// * Convertendo number para string através do método.
console.log(num1.toString() + num2.toString());

// Exibindo um number em binário utilizando o método .toString().
console.log(num1.toString(2), num2.toString(2)); // Binário

// * Exibindo um número ponto flutuante grande em arredondamento para x casas decimais.
console.log(num3, num3.toFixed(2));

// * Verificando se um número é inteiro usando um método nativo de Number, Number.isInteger().
console.log(`O número ${num1} é inteiro? ${Number.isInteger(num1)}`);
console.log(`O número ${num2} é inteiro? ${Number.isInteger(num2)}`);

let temp = num1 * minhaString;
// * Verificando se algum valor é NaN com Number.isNan().
console.log(Number.isNaN(temp)); // true

const num4 = 0.7;
const num5 = 0.1;
console.log(num4 + num5); // Deveria retornar 0.8, mas retorna 0.799999999999999 (Imprecisão)

// * Solução.
const newResult = (num4 * 100 + num5 * 100) / 100;
console.log(newResult);
