const paragrafos = document.querySelector('.paragrafos');
const todosParagrafos = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (const paragrafo of todosParagrafos) {
  console.log(paragrafo);
  paragrafo.style.color = 'rgba(255, 255, 255, 1)';
  paragrafo.style.backgroundColor = backgroundColorBody;
}
