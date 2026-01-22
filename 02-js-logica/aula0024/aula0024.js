const data = new Date('2001-11-28');
const diaSemana = data.getDay();

console.log(diaSemana);

// if (diaSemana === 0) {
// 	diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
// 	diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
// 	diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
// 	diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
// 	diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
// 	diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
// 	diaSemanaTexto = 'Sábado';
// } else {
// 	console.log('');
// }

function getDiaSemanaTexto(diaSemana) {
	let diaSemanaTexto;
	switch (diaSemana) {
		case 0:
			diaSemanaTexto = 'Domingo';
			// break;
			return diaSemanaTexto;
		case 1:
			diaSemanaTexto = 'Segunda';
			// break;
			return diaSemanaTexto;
		case 2:
			diaSemanaTexto = 'Terça';
			// break;
			return diaSemanaTexto;
		case 3:
			diaSemanaTexto = 'Quarta';
			// break;
			return diaSemanaTexto;
		case 4:
			diaSemanaTexto = 'Quinta';
			// break;
			return diaSemanaTexto;
		case 5:
			diaSemanaTexto = 'Sexta';
			// break;
			return diaSemanaTexto;
		case 6:
			diaSemanaTexto = 'Sábado';
			// break;
			return diaSemanaTexto;
		default:
			return (diaSemanaTexto = '');
	}
}

console.log(getDiaSemanaTexto(diaSemana));
