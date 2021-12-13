const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const ps = document.querySelectorAll('p');
for (let p of ps) {
    p.addEventListener('click', colorize)
}

function colorize(){
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}