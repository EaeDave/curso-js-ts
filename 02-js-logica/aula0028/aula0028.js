// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// Usando for para exibir

for (let i = 0; i <= 5; i++) {
	console.log(`Linha ${i}`);
}

// Verificando numeros pares

for (let i = 0; i <= 10; i++) {
	// const par = i % 2 === 0;

	// if (par) {
	// 	console.log(`O número ${i} é par!`);
	// }

	const parOuImpar = i % 2 === 0 ? 'par' : 'ímpar';
	console.log(`O número ${i} é ${parOuImpar}`);
}

const frutas = ['Maçã', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
	console.log(frutas[i]);
}
