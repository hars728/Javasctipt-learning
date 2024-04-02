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
## PROJECT 02

IN THIS PROJECT WE ARE USING THE DOM CONCEPT  OF JS.


###  BMI calculator

```js
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

### In this file i include the bmi with their category
so try this code
```js
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi<18.6){
      results.innerHTML = `<span>${bmi} you are in under weight category</span>` ;
    }
     else if (bmi>18.6 && bmi<24.9){
      results.innerHTML = `<span>${bmi} you are in normal weight category</span>`;
    }
     else {
      results.innerHTML = `<span>${bmi} you are in overweight category</span>` ;
    }
    //show the result
     // results.innerHTML = `<span>${bmi}</span>`;
  }
});


```