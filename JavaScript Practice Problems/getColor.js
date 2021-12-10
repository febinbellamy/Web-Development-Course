/*
Let's get some practice with conditional statements! In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).

Your job is to print out a color based upon the following rules:
- if phrase is 'stop', you should print out 'red'
- if phrase if 'slow', you should print out 'yellow'
- if phrase is 'go', you should print out 'green'
- if phrase is anything else, you should print out 'purple'

*/

function getColor(phrase){
   if (phrase === 'stop') {
       console.log('red');
   } else if (phrase === 'slow') {
       console.log('yellow');
   } else if (phrase === 'go') {
       console.log('green');
    } else { 
    console.log('purple');
    }
}