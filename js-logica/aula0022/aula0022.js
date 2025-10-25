/**
 * Operador ternário
 * ? :
 */

const pontuacaoUsuario = 1000;

// if (pontuacaoUsuario >= 1000) {
// 	console.log('Usuário VIP');
// } else {
// 	console.log('Usuário normal');
// }

// Operação ternária na prática
const nivelUsuario =
	pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

const corUsuario = 'Amarelo';

// Se houver corUsuario, então a cor definida será a do user, senão, preto por padrão
// const corDefinida = corUsuario ? corUsuario : 'Preto';
const corDefinida = corUsuario || 'Preto';

console.log(corDefinida);
