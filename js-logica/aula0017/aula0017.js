/**
 * Operadores de comparação
 * >
 * >=
 * <
 * <=
 * ==
 * === igualdade estrita (valor e tipo)
 * !=
 * !== diferente estrito (valor e tipo)
 */

const expressao1 = 10 > 5;
const expressao2 = 10 <= 5;
console.log(expressao1); // true
console.log(expressao2); // false

const num1 = 10;
const num2 = '10';
console.log(num1 == num2); // Retorna true, pois são iguais, mas não são tipos iguais.
console.log(num1 === num2); // Retorna false, pois precisa ser tanto o valor quanto o tipo iguais.
console.log(num1 != num2); // Retorna false, pois é considerado igual
console.log(num1 !== num2); // Retorna true, pois são estritamente diferentes (tipos nesse caso)
