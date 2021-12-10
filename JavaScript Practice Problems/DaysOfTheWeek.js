/* 

Write a function called returnDay. This function takes in one parameter (a number from 1- 7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.) 
If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as null the first day of the week, 
but for this exercise we will use Monday as the first day. 

Hint: store the days of the week in an array, or use an object with numerical keys.  
When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value. 

returnDay(1)  // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null 

*/ 

// DEFINE YOUR FUNCTION BELOW:
function returnDay(numFromOneToSeven) {
    if (numFromOneToSeven === 1) {
        return "Monday";
    } else if (numFromOneToSeven === 2) {
        return "Tuesday";
    } else if (numFromOneToSeven === 3) {
        return "Wednesday";
    } else if (numFromOneToSeven === 4) {
        return "Thursday";
    } else if (numFromOneToSeven === 5) {
        return "Friday";
    } else if (numFromOneToSeven === 6) {
        return "Saturday";
    } else if (numFromOneToSeven === 7) {
        return "Sunday";
    } else {
        return null;
    }
}