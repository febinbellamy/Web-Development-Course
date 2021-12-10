/*

Please write a function called lastElement which accepts a single array argument. 
The function should return the last element of the array (without removing the element). If the array is empty, the function should return null.

lastElement(C3 , 5 , 7))
// 7

lastElement(C1]) 
// 1

lastElement(O) 
// null
                
*/

function lastElement(anArray) {
    if (anArray.length >= 1) {
        return anArray[anArray.length - 1];
    } 
    return null;
}