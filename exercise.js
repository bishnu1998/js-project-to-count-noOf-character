const firstButtonElement = document.querySelector('button');

const secondButtonElement = document.querySelector('#change-bg-btn');

const firstParagraphElement =document.body.children[2].children[1];
console.log(firstParagraphElement);
//const thirdParagraphElement =document.body.children[2].children[3];
const thirdParagraphElement =firstParagraphElement.nextElementSibling.nextElementSibling;
console.log(thirdParagraphElement);



function removeParagraph(){
//console.dir(firstButtonElement);
thirdParagraphElement.remove();

}
function changeBackgroundColor(event){
//console.dir(event.target);
//firstParagraphElement.style.backgroundColor ='blue';
//firstParagraphElement.className = 'blue-bg';
firstParagraphElement.classList.add('blue-bg');
}



firstButtonElement.addEventListener('click',removeParagraph);
secondButtonElement.addEventListener('click',changeBackgroundColor);



