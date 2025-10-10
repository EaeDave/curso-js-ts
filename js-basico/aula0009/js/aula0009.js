alert('Haverá um cálculo de soma.');
const primeiroValor = prompt('Digite o primeiro valor: ');
const segundoValor = prompt('Digite o segundo valor: ');
const devoCalcular = confirm();

if (devoCalcular) {
  const soma = parseFloat(primeiroValor) + parseFloat(segundoValor);
  console.log(soma);
}
