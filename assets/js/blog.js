// We selected the 3 el that we need which are the toggleButton, header and section on html
const toggleButton = document.querySelector('.myBlogAppToggle');
let bodyElement = document.body;
// this header is for the myBlogApp on html
const header = document.querySelector('.myBlogAppHeader ');
const section = document.querySelector('.myBlogAppSection');

let footer = document.querySelector('footer');
let spanElement = document.querySelector('.myBlogAppToggle');
let initialContent = spanElement.innerHTML
console.log('initialContent' + spanElement);

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
    console.log('initialContent' + spanElement);

  } else {
    spanElement.innerHTML = initialContent;
    mode = "light";
    bodyElement.setAttribute('style', 'background-color: white');
  
    header.setAttribute('class', 'myBlogAppHeader');
    section.setAttribute('class', 'myBlogAppSection')
    footer.setAttribute('class', 'footer')
  }
}); 
