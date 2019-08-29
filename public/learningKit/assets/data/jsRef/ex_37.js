//input from node
//let myArgs = process.argv.slice(2);

for(let i = 1; i<= 10; i++){
  let fact = 1;
  for(let j = 1; j <= i; j++){
    fact = fact*j;
  }
  console.log(`Factorial of ${i} is: ${fact}`);
}