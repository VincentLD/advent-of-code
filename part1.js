import fs from 'fs';

const data = fs.readFileSync('3/data.txt', { encoding: 'utf-8' }).split('\n');
const halfRows = Math.floor(data.length / 2);

let res = [];
let gamma = '';
let epsilon = '';

data.forEach((row) => {
	[...row].forEach((column, idColumn) => {
		if (res[idColumn] === undefined) {
			res[idColumn] = 0;
		} else {
			res[idColumn] += parseInt(column);
		}
	});
});

console.log(res);

res.forEach((value) => {
	if (value > halfRows) gamma += '1';
	else gamma += '0';
	if (value <= halfRows) epsilon += '1';
	else epsilon += '0';
});

let gammaB10 = parseInt(gamma, 2);
let epsilonB10 = parseInt(epsilon, 2);

console.log(gammaB10 * epsilonB10);
