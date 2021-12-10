/*

In some dice games like Craps, a roll of two I's is called "Snake Eyes". It's generally not a good roll. 
Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice. 
If the two numbers are both I's, please print "Snake Eyes!" Otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) // Snake Eyes !
isSnakeEyes(1,5) // Not Snake Eyes!
isSnakeEyes(4,5) // Not Snake Eyes!

*/

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}