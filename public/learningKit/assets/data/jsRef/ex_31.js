let a = 10;
let r ='';

while(a>0){
   r += `${a%2}`;
   a = Math.floor(a/2);
}
r = reverseString(r);

function reverseString(str) {
   return str.split("").reverse().join("");
}

console.log(`Binary Output = ${r}`);