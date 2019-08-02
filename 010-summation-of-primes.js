const isPrime = require('./helpers/isPrime');

let primes = [2, 3, 5, 7, 11];

let cur = 13;
while (cur < 2000000) {
  if (isPrime(cur)) {
    primes.push(cur);
  }
  cur += 2;
}

const sum = primes.reduce((acc, cur) => acc + cur, 0);

console.log('sum', sum);
