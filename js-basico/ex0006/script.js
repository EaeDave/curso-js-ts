function meuEscopo() {
	const formulario = document.querySelector('#form');
	const resultado = document.querySelector('#resultado');
	// Utilizando id, os atributos viram parte do objeto
	const nome = formulario.nome;
	const sobrenome = formulario.sobrenome;
	const peso = formulario.peso;
	const altura = formulario.altura;
	let pessoas = [];

	function criaPessoa(nome, sobrenome, peso, altura) {
		return {
			nome,
			sobrenome,
			peso,
			altura,
		};
	}

	formulario.addEventListener('submit', (event) => {
		event.preventDefault();

		pessoas.push(
			criaPessoa(nome.value, sobrenome.value, peso.value, altura.value),
		);
		resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

		console.log(pessoas);
	});
}

meuEscopo();
