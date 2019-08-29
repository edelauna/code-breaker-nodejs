//input from node
//let myArgs = process.argv.slice(2);
let m1 = [[1, 2], [3,4]];
let m2 = [[5,6],[7,8]];
let product = [];

for(let i = 0; i < m1.length; i++){
  product[i] = [];
  for(let j = 0; j < m2[0].length; j++){
    let sum = 0;
    for(let k = 0; k <m1[0].length; k++){
      sum += m1[i][k] * m2[k][j];
    }
    product[i][j] = sum;
  }
}

console.log(product);