//input from node
let myArgs = process.argv.slice(2);
let a = myArgs[0];
let b = myArgs[1];

let r = a - b;

if(r<0){
  r = parseInt(r) + parseInt(b);
}

while(r>b){
  r = r -b;
}

console.log(r);