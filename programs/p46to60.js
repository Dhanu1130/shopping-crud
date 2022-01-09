//46.program to compare two arrays using JSON.stringify
function compareArrays(arr1, arr2) {
    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}
const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];
compareArrays(array1, array2);

//47.program to get a random item from an array
function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
const array = [1, 'hello', 5, 8];
const result = getRandomItem(array);
console.log(result);

//48.program to check if a variable is undefined or null
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

//49.Integer Value Between Two Numbers
// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;
// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);

//50.Get The Current URL
const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);

//51. program to check if a variable is of function type
function testVariable(variable) {
      
    if(variable instanceof Function) {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}
const count = true;
const x = function() {
    console.log('hello')
};
testVariable(count);
testVariable(x);

//52.program to convert date to number
// create date
const d1 = new Date();
console.log(d1);
// converting to number
const result = d1.getTime();
console.log(result);

//53. program to get the dimensions of an image
const img = new Image();
// get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// get height and width
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}