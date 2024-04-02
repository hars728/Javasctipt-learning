const clock = document.querySelector('#clock')
const datee = document.querySelector('#dat')

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000);

setInterval(function () {
  let date = new Date();
  datee.innerHTML = date.toLocaleDateString();
}, );