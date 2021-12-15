/*
Let's get some practice using addEventListener . I've provided you with two buttons, each with an id:
Your goal is to add a click listener to each button.

• When the hello button is clicked, you should console.log "hello"
• When the goodbye button is clicked, you should console.log "goodbye"

Make sure to use addEventListener!
*/

const button1 = document.querySelector('#hello');
const button2 = document.querySelector('#goodbye');

button1.addEventListener('click', () => {
    console.log('hello')
})

button2.addEventListener('click', () => {
    console.log('goodbye')
})
