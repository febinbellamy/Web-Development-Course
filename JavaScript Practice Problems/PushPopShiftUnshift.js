/*

I've provided you with an array called planets . Unfortunately, I'm an idiot who doesn't know much about our solar system and I made some mistakes. 
Please help me fix the planets array! Using the array methods we just learned..

1. Remove the first element, "The Moon", from the planets array. The moon is not a planet!
2. Add in "Saturn" at the very end of the planets array
3. Add "Mercury" as the first element in the planets array.

At the end of your hard work, planets should look like this:
["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

*/

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();
planets.unshift("Mercury");
planets.push("Saturn");
