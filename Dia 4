function getRandomIntInclusive(min, max) {
  min = 1;
  max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chanceUm = prompt("De 1 a 10, que numero que estou pensando?");

if (chanceUm == getRandomIntInclusive()) {
  alert(`Parabens, você acertou de primeira, é o numero ${getRandomIntInclusive()}`);
}
if (chanceUm != getRandomIntInclusive()) {
  alert(`Que pena, não é ${chanceUm}`);
  const chanceDois = prompt("Segunda tentavia, qual é o numero que estou pensando?");
  
  if (chanceDois == getRandomIntInclusive()) {
      alert(`Parabens, você acertou de segunda, é o numero ${getRandomIntInclusive()}`);
  }
  
  if (chanceDois != getRandomIntInclusive()) {
    alert(`Que pena, não é ${chanceDois}`);
    const chanceTres = prompt("Terceira e ultima tentavia, qual é o numero que estou pensando?");
    
    if (chanceTres == getRandomIntInclusive()) {
      alert(`Parabens, você acertou de terceira, é o numero ${getRandomIntInclusive()}`);
    }
    if (chanceTres != getRandomIntInclusive()) {
      alert(`Que pena, acabou suas chances, o numero era ${getRandomIntInclusive()}`);
    }
    
  }
}
