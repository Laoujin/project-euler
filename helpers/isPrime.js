module.exports = function isPrime(n) {
  if (n % 2 === 0) return n === 2;
  if (n % 3 === 0) return n === 3;
  const floorSqrt = Math.floor(Math.sqrt(n));
  for (let i = 5; i <= floorSqrt; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0)
      return false;
  }
  return true;
};
