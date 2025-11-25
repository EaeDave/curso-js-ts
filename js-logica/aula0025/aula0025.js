const verdadeira = true

// let tem escopo de bloco {}
// var só tem escopo de função

let nome = 'David' // Criando uma variável com escopo de função
var nome2 = 'David'

if (verdadeira) {
	let nome = 'Outra coisa' // Criando uma nova variável com escopo de bloco
	var nome2 = 'Rogério' // Redeclarando a variável existente
	console.log(nome, nome2)

	if (verdadeira) {
		let nome = 'Mais outra coisa' // Criando uma nova variável com escopo de bloco
		console.log(nome, nome2)
	}
}

console.log(nome2) // Rogério
console.log(nome) // David
