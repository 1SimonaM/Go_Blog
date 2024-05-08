
// this header is for the index html
const headerIndex = document.querySelector('.header');
const sectionIndex = document.querySelector('.section');
const toggleButtonIndex = document.querySelector('.toggle');
const h2Element = document.querySelector('.h2');
const spanElementIndex= document.querySelector('.toggle');
const bodyElementIndex = document.body;


let initialContentIndex = spanElementIndex.innerHTML;
let modeIndex= 'light';
let spanElement2= document.querySelector('.toggle');

toggleButtonIndex.addEventListener("click", function (){

  let newContent =
  '<img src="./assets/images/moon.png" width ="25px" height ="25px">';

  if (modeIndex === "light"){
    modeIndex = "dark";
    spanElement2.innerHTML = newContent;
    bodyElementIndex.setAttribute('style', 'background-color: whitesmoke');
    headerIndex.setAttribute('class', 'headerNight');
    sectionIndex.setAttribute('class', 'sectionNight');
    h2Element.setAttribute('class', 'h2Night');
    console.log('lightMode' )

  } else {
    spanElement2.innerHTML = initialContentIndex;
    modeIndex = "light";
    bodyElementIndex.setAttribute('style', 'background-color: whitesmoke');
    headerIndex.setAttribute('class', 'header');
    sectionIndex.setAttribute('class', 'section');
    h2Element.setAttribute('class', 'h2');

  }
}
)

