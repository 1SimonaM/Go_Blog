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

// Display the submitted form data
document.addEventListener('DOMContentLoaded', function() {
const formDataArr = JSON.parse(localStorage.getItem('formDataArr')) || [];
const myBlogAppSection = document.querySelector('.myBlogAppSection');

console.log('This is the form data', formDataArr);

if (formDataArr.length > 0) {
formDataArr.foreach(function(formData, index){
myBlogAppSection.innerHTML += `<div class="container">
<div class="contentbox">
    <h2>${formData.title}</h2>
    <hr>
    <p class="content" id="content1">
  ${formData.message}
    </p>

    <span class="postedby">Posted by: ${formData.username}</span>
</div>
</div>`

} 
)
} else {
  myBlogAppSection.innerHTML += `<div class="container">
<div class="contentbox">
    <h2>Blog Title</h2>
    <hr>
    <p class="content" id="content1">
  content
    </p>

    <span class="postedby">Posted by: SimonaM</span>
</div>
</div>`
}
})



