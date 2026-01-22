// Gerar o seguinte output:
// <NOME_COMPLETO> tem <IDADE> anos, pesa <PESO> kg
// tem <ALTURA_EM_M> e seu IMC é de <CALC_IMC>

const nomeCompleto = 'David Rodrigues da Silva';
const anoNascimento = 2001;
const anoAtual = 2025;
const idade = anoAtual - anoNascimento;
const peso = 70;
const alturaEmM = 1.7;
const imc = peso / (alturaEmM * alturaEmM);

console.log(`${nomeCompleto} tem ${idade} pesa ${peso} kg`); // Template Strings
console.log('tem', alturaEmM, 'e seu IMC é de', imc);
