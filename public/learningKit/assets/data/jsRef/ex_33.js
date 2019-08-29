//input from node
let myArgs = process.argv.slice(2);
let a = parseInt(myArgs[0]);
let b = parseInt(myArgs[1]);
let i = 1;
let added = a;
let increment = a;

while(i < b){

  for(let j = 1; j<a; j++){
    added += increment;
  }
  increment = added;
  i++;
}

console.log(added);