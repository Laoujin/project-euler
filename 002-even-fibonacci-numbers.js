// https://projecteuler.net/problem=2

let sum = 0;

let last = 1;
let cur = 1;

while (cur < 4000000) {
  if (cur % 2 === 0) {
    sum += cur;
  }

  let temp = last;
  last = cur;
  cur += temp;
}

console.log('Sum', sum);
