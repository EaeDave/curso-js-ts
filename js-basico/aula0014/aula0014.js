// * Funções executam ações.

// Parâmetro nome.
function saudacao(nome) {
	console.log(`Olá, ${nome}. Seja-bem vindo(a)!`);
}

saudacao('David'); // Chamando a função para ser executada.
saudacao('Fulano de tal');
const essaFuncaoNaoRetornaNada = saudacao('Teste');
console.log(essaFuncaoNaoRetornaNada); // undefined

function somar(num1, num2) {
	const resultado = num1 + num2; // * Essa variável só existe no ESCOPO dessa função.
	return resultado; // Essa função retorna algo, e pode ser armazenado o retorno em uma variável/constante.
}

// ! console.log(resultado); // Geraria um erro, pois resultado não é declarada no escopo global, mas sim, na função somente.

const primeraSoma = somar(1, 9);
console.log(primeraSoma); // 10

const segundaSoma = somar(50, 99);
console.log(segundaSoma); // 149

// Essa função tem parâmetros com valores padrão.
function subtrair(x = 1, y = 1) {
	return x - y;
}

console.log(subtrair()); // 0 pois 1 - 1 = 0
console.log(subtrair(10, 5)); // 5

// Declarando uma função anônima
const raiz = function (numero) {
	return numero ** 0.5;
};

console.log(raiz(81)); // 9

const raizComArrowFunction = (numero) => numero ** 0.5; // * Em arrow functions, já retorna se não passar chaves.

console.log(raizComArrowFunction(16)); // 4
