import fs from 'fs';

const input = fs
  .readFileSync('data.txt', {encoding: 'utf-8'})
  .trim()
  .split('\n')
  .map(x => parseInt(x))
;

let count = 0;

for (let i = 0; i < input.length - 3; i++) {
  let a = input[i];
  let b = input[i + 1];
  let c = input[i + 2];
  let d = input[i + 3];

  let current = a + b + c;
  let next = b + c + d;

  current < next ? count ++ : '';
}
