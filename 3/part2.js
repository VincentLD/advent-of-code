import fs from 'fs';

const data = fs.readFileSync('data.txt', { encoding: 'utf-8' }).split('\n');
const nbCols = data[0].length;
let halfRows;
let dataCopy = data;
let bitToDelete;
let res;

// OXYGEN GENERATOR RATING
for (let indexCol = 0; indexCol < nbCols; indexCol++) {
	res = 0;

	halfRows = Math.ceil(dataCopy.length / 2);
	console.log(halfRows);

	dataCopy.forEach((row) => {
		res += parseInt(row[indexCol]);
	});

	bitToDelete = res >= halfRows ? 1 : 0;

	dataCopy = dataCopy.filter((row) => parseInt(row[indexCol]) === bitToDelete);

	if (dataCopy.length == 1) break;
}

const oxygenGeneratorRating = dataCopy.pop();
const oxygenGeneratorRatingB10 = parseInt(oxygenGeneratorRating, 2);

// CO2 SCRUBBERE RATING
dataCopy = data;
for (let indexCol = 0; indexCol < nbCols; indexCol++) {
	res = 0;

	halfRows = Math.ceil(dataCopy.length / 2);
	console.log(halfRows);

	dataCopy.forEach((row) => {
		res += parseInt(row[indexCol]);
	});

	bitToDelete = res >= halfRows ? 0 : 1;

	dataCopy = dataCopy.filter((row) => parseInt(row[indexCol]) === bitToDelete);

  console.log(bitToDelete);
	if (dataCopy.length == 1) break;
}

const co2ScrubberRating = dataCopy.pop();
const co2ScrubberRatingB10 = parseInt(co2ScrubberRating, 2);

console.log(oxygenGeneratorRatingB10 * co2ScrubberRatingB10);
