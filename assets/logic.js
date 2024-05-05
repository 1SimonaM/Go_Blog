// We selected the 3 el that we need which are the toggleButton, header and section on html
const toggleButton = document.querySelector('.myBlogAppToggle');
let bodyElement = document.body;
// this header is for the myBlogApp on html
const header = document.querySelector('.myBlogAppHeader ');
const section = document.querySelector('.myBlogAppSection');

let footer = document.querySelector('footer');
let spanElement = document.querySelector('.myBlogAppToggle');
let initialContent = spanElement.innerHTML;
let mode = "light";

toggleButton.addEventListener("click", function () {
  let newContent =
    '<img src="./assets/image/moon.png" width ="25px" height ="25px">';

  if (mode === "light") {
    mode = "dark";
    spanElement.innerHTML = newContent;
    bodyElement.setAttribute('style', 'background-color: #243447');
    header.setAttribute('class', 'headerDark');
    section.setAttribute('class', 'sectionDark');
    footer.setAttribute('class', 'footerDark');
  } else {
    spanElement.innerHTML = initialContent;
    mode = "light";
    bodyElement.setAttribute('style', 'background-color: white');
  
    header.setAttribute('class', 'myBlogAppHeader');
    section.setAttribute('class', 'myBlogAppSection')
    footer.setAttribute('class', 'footer')
  }
}); 

// this header is for the index html
const headerIndex = document.querySelector('.header');
const sectionIndex = document.querySelector('.section');
const toggleButtonIndex = document.querySelector('.toggle');
const formElement = document.querySelector('.form');
const h2Element = document.querySelector('.h2');

let modeIndex = 'light';
let spanIndex = document.querySelector('.toggle');

toggleButtonIndex.addEventListener("click", function (){

  let newContent =
  '<img src="./assets/image/moon.png" width ="25px" height ="25px">';

  if (modeIndex === "light"){
    modeIndex = "dark";
    spanIndex.innerHTML = newContent;
    bodyElement.setAttribute('style', 'background-color: #243447');
    headerIndex.setAttribute('class', 'headerNight');
    sectionIndex.setAttribute('class', 'sectionNight');
    formElement.setAttribute('class', 'formNight');
    h2Element.setAttribute('class', 'h2Night');

  } else {
    spanIndex.innerHTML = initialContent;
    modeIndex = "light";
    bodyElement.setAttribute('style', 'background-color: white');
    headerIndex.setAttribute('class', 'header');
    sectionIndex.setAttribute('class', 'section');
    formElement.setAttribute('class', 'form');
    h2Element.setAttribute('class', 'h2');

  }
}
)

