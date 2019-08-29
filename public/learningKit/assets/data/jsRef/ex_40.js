//input from node
let myArgs = process.argv.slice(2);
let a = myArgs[0];
let b = myArgs[1];
let c = myArgs[2];

let x = Math.round(Math.random()*10);
let y = Math.round(Math.random()*10);
let z = Math.round(Math.random()*10);

let lotto = [x, y, z];
let guess = [a, b, c];

let flag = false;

for(let i = 0; i < lotto.length; i++){
  if(lotto[i] == guess[i]){
    flag = true;
  } else{
    flag = false;
  }
}

if(flag == true){
  console.log("Correct");
} else{
  console.log(`Incorrect \n Lotto: ${lotto} \n Guess: ${guess}`)
}