const htmlContent = document.querySelector('.body');
htmlContent.innerHTML = htmlContent.innerHTML.toLowerCase();

const span = document.querySelector('#keyword');
let count = 0;
let interval = setInterval(function() {
  if (count % 2 === 0) {
    span.textContent = "lending";
  } else {
    span.textContent = "borrowing";
  }
  count++;
  
}, 1500);

