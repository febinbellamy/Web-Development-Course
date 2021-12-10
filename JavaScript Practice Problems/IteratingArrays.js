/* 
I've provided you with an array of strings called people. Loop over the people array with a for loop, printing out each name in uppercase letters. 

Your result should look something like:

SCOOBY
VELMA
DAPHNE
SHAGGY
FRED

Hint: use i from your loop as an array index!
                
*/

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    let currentElemCaps = people[i].toUpperCase();
    console.log(currentElemCaps)
}