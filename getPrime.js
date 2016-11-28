function isPrime(n) {
  var lowerLimit = Math.ceil(Math.sqrt(n));
  for(var i = 2; i <= lowerLimit; i++) {
    if( n%i === 0 && n !== i){
      return false;
    }
  }
  return true;
}

function getPrime(n){
  var primes = [1,2];
  for(var i = 3; i <= n; i++){
    if (isPrime(i)){
      primes.push(i);
    } 
  }
  return primes;
}

getPrime(10);