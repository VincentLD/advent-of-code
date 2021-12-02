import fs from 'fs';

const input = fs
  .readFileSync('data.txt', {encoding: 'utf-8'})
  .split('\n').map((el) => el.split(' '))
;

let posX = 0;
let posY = 0;

input.forEach((coordinate) => {
  const value = parseInt(coordinate[1], 10);
  coordinate[0] === 'forward' ? posX += value : '';
  coordinate[0] === 'up' ? posY -= value : '';
  coordinate[0] === 'down' ? posY += value : '';
});
