/* 

Let's practice using for...of. I've provided you with an array called numbers. 
Please use a for of loop to loop over it, and print out the square of each value (the number multiplied by itself)

Your output should look like this:
1
4
9
16
25
36
49
64
81

*/ 

const numbers = [1,2,3,4,5,6,7,8,9];

for (let num of numbers) {
    console.log(num * num);
}