/*

I've provided you with a word variable, set to "skateboard." Your goal is to use string methods on word, so that you end up with the string "beard".

1. Use a string method to extract the "board" part of "skateboard" (using the slice method)
2. Replace the "o" in board with an "e" (using the replace method)
3. Save the result in a variable called facialHair
                
*/

const word = "skateboard";
let facialHair = word.replace("o", "e").slice(5);
