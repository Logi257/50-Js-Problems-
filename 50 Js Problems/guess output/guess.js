console.log([1, 2, 3].reduce((a, b) => a + b));
/*Answer = 6 (1+2+3 = 6)
It takes two parameters, a (accumulator) and b (current value), adding them together.
*/

console.log('gfg'.repeat(3));
/*Answer = gfggfggfg
The code console.log('gfg'.repeat(3)); uses the repeat() method to create a new string by repeating the string 'gfg' three times. 
*/

console.log(1 + '2');
/* 
Answer = 12 
In JavaScript, when a number and a string are combined with +, the number is converted to a string. 
*/

console.log('6' - 1);

/*
Answer = 5
JavaScript convert the string to a number automatically which is called type coercion.
*/

console.log(1 === '1');

/*  
Answer = false
Strict equality operator(===) check both the type and the value. 
*/

console.log(null == undefined);

/*
Answer = true
'null' represents the absence of any value and 'undefined' represents a variable that has been declared but not assigned any value.
*/