console.log('David Rodrigues' && 0 && 'Camila'); // Retorna o curto circuito

/**
 * Falsy values
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

console.log('David' && 'Camila'); // Retorna Camila

function falaOi() {
	console.log('Oi');
}

// const vaiExecutar = false;
const vaiExecutar = true;

vaiExecutar && falaOi();

console.log(0 || false || null || 'David' || true); // Retorna David

const corUsuario = '';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
