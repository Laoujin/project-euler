const isPrime = require('./helpers/isPrime');

// https://projecteuler.net/problem=3
const nr = 600851475143;
// const nr = 13195;

let primes = [2, 3];
const sqr = Math.floor(Math.sqrt(nr));
for (let i = 5; i < sqr; i += 2) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

// console.log('primez', primes);

let factors = [];

let cur = nr;
while(cur === parseInt(cur, 10) && cur > 1) {
  let i = 0;
  for (i = 0; i < primes.length; i++) {
    const d = cur / primes[i];
    if (d === parseInt(d, 10)) {
      cur /= primes[i];
      factors.push(primes[i]);
      break;
    }
  }
  if (i === primes.length) {
    console.log('Uhoh... wuuk?', cur);
    break;
  }
}

console.log('factors', factors);
