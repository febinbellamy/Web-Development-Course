/*
Use JavaScript to make the following changes:

- Select the div with the id of container. Using JavaScript, set it's text alignment to 'center';
- Select the image and use JavaScript to give it a width of 150px and a border radius of 50%

Remember to use camelCased property names in JavaScript! (backgroundColor, not
background-color, etc.)
                
*/

const newDiv = document.querySelector('#container');
newDiv.style.textAlign = 'center';

const newImage = document.querySelector('img');
newImage.style.width = '150px';
newImage.style.borderRadius = '50%';