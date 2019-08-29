//input from node
//let myArgs = process.argv.slice(2);

for(let i = 1; i <= 10000; i++){
  let originalInt = i;
  let number = i;
  let remainder = 0;
  let reversedInt = 0;

  do{
    reversedInt = reversedInt*10 + number%10;
    number = Math.floor(number/10);
  }while(number > 0)

  if(originalInt == reversedInt){
    console.log(`${i} is a Palindrom`)
  }
}