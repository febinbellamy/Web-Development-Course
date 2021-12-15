/*

Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.

- Create exactly 100 new button elements
- Each button must have some text inside of it (it doesn't matter what)
- Each button much be appended inside the container div

*/

let newContainer = document.querySelector('#container');

for(let i=1; i<=100; i++) {
    let aNewButton = document.createElement('button');
    aNewButton.innerText = 'Hey!';
    container.appendChild(aNewButton);
}