// We selected the 3 el that we need which are the toggleButton, header and section on html
const toggleButton = document.querySelector('.toggle');
let bodyElement = document.body;
const header = document.querySelector('.header');
const section = document.querySelector('.section');

let footer = document.querySelector('footer');
let spanElement = document.querySelector('.toggle');
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
  
    header.setAttribute('class', 'header');
    section.setAttribute('class', 'section')
    footer.setAttribute('class', 'footer')
  }
}); 




