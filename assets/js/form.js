
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

formElement.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(formElement);
  let formDataEntries = formData.entries();
  const formValues = {};
  // Convert formData to JSON object
  for(let [key, value] of formDataEntries){
   formValues[key] = value; 
  }
  // Retrive existing form data array from local storage
  let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
  // Add new form data to the array
  formDataArray.push(formValues);
  // Store updated form data array in local storage
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));
  // Reidirect to blog.html
  window.location.href= 'blog.html';
  

} 
)




