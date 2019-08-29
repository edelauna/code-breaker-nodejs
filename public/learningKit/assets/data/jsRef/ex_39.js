//input from node
//let myArgs = process.argv.slice(2);

for(let i = 2; i < 100; i++){
  if(prime(i) == true || i == 2){
    console.log(i);
  }
}

function prime(num){
  let flag = true;
  let d = 2;
  let limit = Math.ceil(Math.sqrt(num));

  do{
    if(num%d == 0 ){
      flag = false;
    }
    d += 1;
  }while(flag == true && d < limit)

  return flag;
}