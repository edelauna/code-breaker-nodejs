//input from node
//let myArgs = process.argv.slice(2);
let array = [1,2,3, [4, 5], 6, 7, 8, 9];

function arraySum(arr){
  let sum = 0;
  for(let i = 0; i <arr.length; i++){
    if(typeof arr[i] == 'object'){
      sum = sum + arraySum(arr[i]);
    }
    else{
      sum += arr[i];
    }
  }
  return sum;
}

console.log(arraySum(array));