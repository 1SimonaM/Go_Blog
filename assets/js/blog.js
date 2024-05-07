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
const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
const myBlogAppSection = document.querySelector('.myBlogAppSection');

console.log('This is the form data', formDataArray);

if (formDataArray.length > 0) { 
for(let item of formDataArray){

    myBlogAppSection.innerHTML += `<div class="container">
    <div class="contentbox">
        <h2>${item.title}</h2>
        <hr>
        <p class="content" id="content1">
      ${item.content}
        </p>
    
        <span class="postedby">Posted by: ${item.username}</span>
    </div>
    </div>`
     
  }

} else {
  myBlogAppSection.innerHTML += `<div class="container">
  <div class="contentbox">
      <h2>Blog Title</h2>
      <hr>
      <p class="content" id="content1">
          Here is my content
      </p>

      <span class="postedby">Posted by: 1Simonam</span>
  </div>
</div>
<div class="container">
  <div class="contentbox">
      <h2>Title 2</h2>
      <hr>
      <p class="content" id="content2">Content 2</p>
      <span class="postedby">Posted by: 1Simonam</span>
  </div>
</div>
<div class="container">
  <div class="contentbox">
      <h2>Title 3</h2>
      <hr>
      <p class="content" id="content3">Content 3</p>
      <span class="postedby">Posted by: 1Simonam</span>
  </div>
</div>
<div class="container">
  <div class="contentbox">
      <h2>Here is The Title</h2>
      <hr>
      <p class="content" id="content4">Here is the content</p>
      <span class="postedby">Posted by: 1Simonam</span>
  </div>
</div>`
}
})



