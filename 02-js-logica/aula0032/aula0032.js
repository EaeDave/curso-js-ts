const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2 || numero === 5) {
    console.log('Aqui passou pelo número 2 ou 5');

    // A palavra continue pula o restante do código vai para a próxima iteração do laço
    continue;
  }

  if (numero === 7) {
    // A palavra break cancela a execução do laço
    break;
  }
  console.log(numero);
}
