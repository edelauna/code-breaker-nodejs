//input
let n = process.argv.slice(2);
console.log(n);
for(let i = 1; i <= n; i++){
  for(let k = 1; k <= n; k++){
     console.log(k*i);
  }
  console.log('\n');
}
