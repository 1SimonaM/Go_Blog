
const formElement = document.querySelector('.form');
const toggleButton = document.querySelector('.toggle');

let mode = 'light';

toggleButtonIndex.addEventListener("click", function (){

  if (mode === "light"){
    mode = "dark";
    formElement.setAttribute('class', 'formNight');
    

  } else {
    mode = "light";
    formElement.setAttribute('class', 'form');
    
  }
}
)

