/**
 * Convenções e regras de nomenclaturas de constantes:
 * Não pode criar com palavras reservadas
 * Precisam ter nomes significativos
 * Não pode começar com número
 * Não podem conter espaços e ou traços
 * Utiliza-se camelCase
 * Case-sensitive
 * Não pode modificar o valor de uma constante
 * NÃO UTILIZE VAR, UTILIZE CONST.
 */

const nome = 'João'; // Constantes precisam sempre ser inicializadas
// nome = 'David'; retorna um erro

const primeiroNumero = 5; // Number
const segundoNumero = 10; // Number
const resultado = primeiroNumero * segundoNumero; //50 Number
const resultadoDuplicado = resultado * 2; // Number
const texto = 'Isso é uma string'; // String
console.log(resultado, texto);
console.log(typeof resultado, typeof texto);
console.log(texto + primeiroNumero); // String + Number = Concatenação (Retorna uma string).
