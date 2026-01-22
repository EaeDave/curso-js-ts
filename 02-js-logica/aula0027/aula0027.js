const pessoa = {
	nome: 'David',
	sobrenome: 'Rodrigues',
	idade: 24,
	endereco: {
		rua: 'Av Brasil',
		numero: 320,
	},
};

const {
	nome: n,
	sobrenome,
	idade,
	endereco: { rua, numero },
	endereco,
} = pessoa;
console.log(n, sobrenome, idade, rua, numero, endereco);
