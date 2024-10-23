//Function declarations are hoisted, meaning they can be called before they appear in the code. 
//Function expressions are not fully hoisted but the variable is hoisted.

//Refactoring
// 1.
const cube = function(x) {
    return x * x * x;
  }
  
// 2.
const fullName = function(first, last) {
    return first + " " + last;
}
  
// 3.
const power = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
  
// 4.
const sumCubes = function(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + cube(numbers[i]);
    }
    return total;
}


//Mechanics of hoisting

//1.
console.log(message);

var message = 'Hi there!';
//undefined because the var "message" hasn't been defined and is initialized as undefined at the time of executing "console.log"

//2.
console.log(message);

let message = 'Hi there!';
//error because the let "message" hasn't been defined or initialized at the time of executing "console.log"

//3.
console.log(showMessage()); 

const showMessage = function(){
  return 'Hi there!';
};
//"ReferenceError" occurs because showMessage is declared using const. 
//Using const variables are hoisted but remain uninitialized until the actual assignment.

//4.
console.log(showMessage());

function showMessage(){
  return 'Hi there!';
}
//Functions are fully hoisted so "showMessage" can be used before declaration.


//Code Restructuring

// 1.
let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
    console.log(values[i]);
  }

// 2.
let lastLogin = '1/1/1970';
console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
