const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
// 01/01/1970 Timestamp unix ou época unix
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

// 2019-01-01T00:00:00
const novaData = new Date(2019, 0, 1, 0, 0, 0);
console.log(novaData.toString());

const outraData = new Date('2001-11-28T00:00:00');
console.log(outraData.toString());
console.log(
	`Ano de nascimento: ${outraData.getDate()}/${
		outraData.getMonth() + 1
	}/${outraData.getFullYear()}`,
);
console.log(Date.now());
const dataTimeStamp = new Date(1761522387142);
console.log(dataTimeStamp.toString());

function zeroAEsquerda(numero) {
	return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const min = zeroAEsquerda(data.getMinutes());
	const sec = zeroAEsquerda(data.getSeconds());
	const ms = zeroAEsquerda(data.getMilliseconds());

	return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}:${ms}`;
}

console.log(formataData(new Date()));
