import fs from 'fs';

const input = fs
  .readFileSync('data.txt', {encoding: 'utf-8'})
  .split('\n').map((el) => el.split(' '))
;

let posX = 0;
let posY = 0;
let aim = 0;

input.forEach((coordinate) => {
  const value = parseInt(coordinate[1], 10);

  if (coordinate[0] === 'forward') {
    posX += value;
    aim != 0 ? posY += value * aim : '';
  }
  coordinate[0] === 'up' ? aim -= value : '';
  coordinate[0] === 'down' ? aim += value : '';
});
