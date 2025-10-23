/**
 * Operadores lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */
console.log(true && true); // true
console.log(false || true); // true

const usuario = 'David';
const senha = '123456';

const loginValido = usuario === 'David'; // Retorna true
const senhaValida = senha === '123456'; // Retorna true

// Se o login for válido e a senha for válida, então entra no sistema.
if (loginValido && senhaValida) {
	console.log('Logado com sucesso no sistema!');
} else {
	console.log('Usuário ou senha incorreto!');
}

const fazSol = true;
console.log(fazSol); // Sim
console.log(!fazSol); // Não!
