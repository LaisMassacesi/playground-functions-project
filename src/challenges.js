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
  let reserveName = []
  reserveName.push(name[name.length - 1])
  reserveName.push(name[0])
  reserveName = reserveName.join(',')
  return reserveName
} 
console.log(concatName(['foguete','nao','tem','re']))




// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
