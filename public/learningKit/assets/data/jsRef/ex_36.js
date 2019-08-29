//input from node
let myArgs = process.argv.slice(2);
let num = myArgs[0];
let bin = '';
let n = num;

while(n != 0){
  if(n%2==0){
    bin = '0' + bin;
  } else {
    bin = '1' + bin;
  }
  n = Math.floor(n/2);
}

console.log(`${num} in binary: ${bin}`);