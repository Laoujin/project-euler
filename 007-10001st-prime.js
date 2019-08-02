const isPrime = require('./helpers/isPrime');

let primes = [2, 3, 5, 7, 11];

let cur = 13;
while (primes.length < 10001) {
  if (isPrime(cur)) {
    primes.push(cur);
  }
  cur += 2;
}

console.log('primes.length', primes.length);
console.log('last prime', primes[primes.length - 1]);
