import fs from 'fs';

const input = fs
  .readFileSync('data.txt', {encoding: 'utf-8'})
  .trim()
  .split('\n')
  .map(x => parseInt(x))
;

let count = 0;

for (let i = 0; i < input.length - 1; i++) {
  let current = input[i];
  let next = input[i + 1];

  current < next ? count ++ : ''
}
