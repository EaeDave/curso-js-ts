const dataAtual = new Date();

function formatDate(date) {
	let weekDay = date.getDay(); // Seg, ter, etc.
	const mounthDay = date.getDate();
	let mounth = date.getMonth() + 1;
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	switch (weekDay) {
		case 0:
			weekDay = 'Domingo';
			break;
		case 1:
			weekDay = 'Segunda-Feira';
			break;
		case 2:
			weekDay = 'Terça-Feira';
			break;
		case 3:
			weekDay = 'Quarta-Feira';
			break;
		case 4:
			weekDay = 'Quinta-Feira';
			break;
		case 5:
			weekDay = 'Sexta-Feira';
			break;
		case 6:
			weekDay = 'Sábado-Feira';
			break;
		default:
			break;
	}

	switch (mounth) {
		case 1:
			mounth = 'Janeiro';
			break;
		case 2:
			mounth = 'Janeiro';
			break;
		case 3:
			mounth = 'Janeiro';
			break;
		case 4:
			mounth = 'Janeiro';
			break;
		case 5:
			mounth = 'Janeiro';
			break;
		case 6:
			mounth = 'Janeiro';
			break;
		case 7:
			mounth = 'Janeiro';
			break;
		case 8:
			mounth = 'Janeiro';
			break;
		case 9:
			mounth = 'Janeiro';
			break;
		case 10:
			mounth = 'Outubro';
			break;
		case 1:
			mounth = 'Janeiro';
			break;
		case 1:
			mounth = 'Janeiro';
			break;

		default:
			break;
	}

	return `${weekDay}, ${mounthDay} de ${mounth} de ${year} ${hours}:${minutes}`;
}

const container = document.querySelector('.container');
let hourRender = container.querySelector('h1');

hourRender.innerText = formatDate(dataAtual);

console.log(formatDate(dataAtual));
