console.log('hello!');
// varibles
let counter = 0;
// Create a button element
const button = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

// Set the button text to 'Can you click me?'
// button 1
button.innerText = 'Dont click me, i do nothing  ';
// button 2
button2.innerText = 'I make the button above do nothing';
// button 3
button3.innerText = 'Fat hoe wants more cookies';

console.log(button.innerText);

button.addEventListener('click', myAddfunction);
button2.addEventListener('click', removeFunctionality);
button3.addEventListener('click', BigFatAss);

// Add the button to your HTML <body> tag, shows button
document.body.appendChild(button); // button 1
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(button2); // buuton 2
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(button3); // button3

// creat the counter
const addcount = (function () {
  return function () {
    counter++;
    return counter;
  };
})();
// BigFatASS auto counter

// link function
function myAddfunction() {
  document.getElementById('cookieCounter').innerHTML = addcount();
}

function removeFunctionality() {
  button.removeEventListener('click', myAddfunction);
}

function BigFatAss() {
  const element = document.getElementById('cookieCounter'); // get counter
  // set counter
  if (counter == null) {
    counter = 0;
  }
  let currentCounter = counter;

  setInterval(function () {
    element.innerHTML += currentCounter++;
  }, 2000);
}
