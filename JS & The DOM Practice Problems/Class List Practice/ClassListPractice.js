/* 

In index.html, you'll find 6 elements, two of which have the class 'highlight' applied to them.
Please use JavaScript and the classList property to invert which elements have the highlight class. 
Basically iterate over all the elements and toggle the class of 'highlight' on each one.

*/ 

let newLi = document.querySelectorAll('li');

for (let list of newLi) {
    list.classList.toggle('highlight');
}