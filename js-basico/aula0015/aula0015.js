const pessoa = {
	nome: 'David',
	sobrenome: 'Rodrigues',
	idade: 23,
};

console.log(
	`Olá, ${pessoa.nome} ${pessoa.sobrenome}. Você tem ${pessoa.idade} anos de idade!`,
);

// * Função que cria objeto (Factory Function)
function criaPessoa(nome, sobrenome, idade) {
	return {
		// Propriedades de um objeto.
		nome,
		sobrenome,
		idade,

		// Criando um método para o objeto
		fala() {
			console.log(
				`Olá, tudo bem? Me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`,
			);
		},
	};
}

const pessoa1 = criaPessoa('Camila', 'Santos', 25);
console.log(pessoa1);
pessoa1.fala();
