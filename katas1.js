function oneThroughTwenty(numeros) {
  let string = [];

  for(let i = 1; i <= numeros; i++){
    string.push(i)
  }
  console.log(string)
  return string
 
}
oneThroughTwenty(20)

function evensToTwenty(numeros) {
  let string = [];
  
  for(let i = 1; i <= numeros; i++){
    if(i % 2 === 0)
    string.push(i)
  }
  console.log(string);
  return string
}
evensToTwenty(20)

function oddsToTwenty(numeros) {
 let string = [];

 for(let i = 1; i <= numeros; i++){
   if(i % 2 !== 0)
   string.push(i)
 }
 console.log(string)
 return string
}
oddsToTwenty(20)

//call function oddsToTwenty

function multiplesOfFive(numeros) {
  let string = [];

  for(let i = 1; i <= numeros; i++){
    if(i % 5 === 0)
    string.push(i)
  }
  console.log(string);
  return string
}
multiplesOfFive(100)

function squareNumbers(numeros) {
  let string = [];

  for(let i = 1; i <= numeros; i++){
    string.push(i*i)
  }
  console.log(string);
  return string
}
squareNumbers(10)

function countingBackwards() {
  let string = [];
  
  for(let i = 20; i > 0; i--){
    string.push(i)
  }
  console.log(string);
  return string
}
countingBackwards(20)

function evenNumbersBackwards(numeros) {
  let string = [];

  for(let i = 20; i > 0; i--){
    if(i % 2 === 0){
      string.push(i)
    }
  }
  console.log(string)
  return string
}
evenNumbersBackwards(20)

function oddNumbersBackwards(numeros) {
  let string = [];

  for(let i = 20; i > 0; i--){
    if(i % 2 !== 0)
    string.push(i)
  }
  console.log(string);
  return string
}
oddNumbersBackwards(20)

function multiplesOfFiveBackwards(numeros){
  let string = [];

  for(let i = 100; i > 0; i--){
    if(i % 5 === 0)
    string.push(i)
  }
  console.log(string);
  return string
}
multiplesOfFiveBackwards(100)

function squareNumbersBackwards(numeros) {
  let string = [];

  for(let i = 10; i > 0; i--){
    string.push(i*i)
  }
  console.log(string);
  return string
}
squareNumbersBackwards(10)

