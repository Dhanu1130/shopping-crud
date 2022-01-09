
// program 6
function find(){
var num1 = parseFloat( document.getElementById("one").value);
var num2 = parseFloat(document.getElementById("two").value);
var num3 = parseFloat(document.getElementById("three").value);
 var largest;
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);
}

//program 7
function findprime(){
var number = parseInt(document.getElementById("prime").value);
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

else {
    console.log("The number is not a prime number.");
}
}
//program 8
function printthedigits(){
var lowerNumber = parseInt(document.getElementById("small").value);
var higherNumber = parseInt(document.getElementById("large").value);

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (var i = lowerNumber; i <= higherNumber; i++) {
    var flag = 0;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}}

//program 9


function fac(){
const number = parseInt(document.getElementById("pnum").value);
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}}
//program10
function multiply(){
const number = parseInt(document.getElementById("mul").value);

for(let i = 1; i <= 10; i++) {

    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
}


