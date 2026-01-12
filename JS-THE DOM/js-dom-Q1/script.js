// Q.1 Create a button and a paragraph in html, when you click on the btn the text of paragraph will changed.

var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click', function(){
    p.textContent='Downloading started successfully!';
    p.style.color="green";
});