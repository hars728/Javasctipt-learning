# Javasctipt-beginners project

### In this 

## PROJECT 1

### In this project we are learninng about the core concept of js like querySelector and EventListener.

Try clicking on one of the colors 
to change the background color of the page!

```js code

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(e);
//console.log(e.target);
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'twoone') {
      body.style.backgroundColor ='#212121' ;
    }
    
  });
});

```