// Desafio 1
function compareTrue(numbA, numbB) {
  if(numbA === true && numbB === true){
    return true;
  }
  else{
    return false;
  }
}
console.log(compareTrue(true, true));



// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
console.log(calcArea(51, 1));



// Desafio 3
function splitSentence(valores) {
  let arrayValores = valores.split(" ");
  return arrayValores;
}
console.log(splitSentence('Vamo que vamo'));




// Desafio 4
 // seu código aqui
function concatName(name){
  let names = []

  names.push((name[name.length-1]) + ", " + name[0]) 
  
  return names.join(',')
  
} 


// Desafio 5
function footballPoints(wins, ties) {
 const points = (wins*3)+ties
 return points
 
}


// Desafio 6
function highestCount(numbers) {
  // seu código aqui
 let score = 0
  bigger = numbers[0]
for(let i = 0; i < numbers.length; i += 1){         //percorre numbers e retorna maior numero
  if(numbers[i] > bigger){
    bigger = numbers[i];
    }
  }  
for(let c = 0; c < numbers.length; c += 1){         //percorre numbers e atualiza score
  if(numbers === bigger){;
  score += 1;
  }
}
return score;
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  positionM = mouse
  positionC1 = cat1 
  positionC2 = cat2 [0]


}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
