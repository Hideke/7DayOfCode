function getRandomIntInclusive(min, max) {
  min = 1;
  max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var i = 0
let num = getRandomIntInclusive()
while (i < 3) {  
  console.log(num)
  const quest = prompt("De 1 a 10, que numero que estou pensando?");
  if (quest == num) {
    alert(`Parabens, você acertou, é o numero ${num}`);
    i = 4
  }
  if (quest != num && i < 2) {
    alert(`Uma pena, não é ${quest},`); 
  }
  i += 1
  if (i == 3){
    alert(`Uma pena, não é ${quest}, o numero era ${num}`);
  }
}

