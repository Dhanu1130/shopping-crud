var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');

var temp;


temp = a;
a = b;
b = temp;

console.log(" The value of a after swapping: " + a);
console.log(" The value of b after swapping: " +  b);
 d= document.getElementById("ans").innerHTML="after swapping the value of a is : " + a ;
 d= document.getElementById("ans1").innerHTML=" after swapping the value of b is : " + b;