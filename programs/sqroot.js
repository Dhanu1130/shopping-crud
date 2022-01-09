function rooting(){
 var a = document.getElementById("num").value;
 console.log(Math.sqrt(a));
  d = document.getElementById("display").innerHTML= Math.sqrt(a)

}
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

let temp;

temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


var e=10;
console.log(Math.random(e));