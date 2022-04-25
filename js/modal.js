const modal = () => {
    const modalButton = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const courseButton = document.querySelector('.course__button');
const modalInner = modal.querySelector('.modal__inner');

modalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
})

courseButton.addEventListener('click', () => {
    modal.style.display = 'flex';
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    
    if(!modalContent) {
        modal.style.display = '';
    }
})

let closeButton = document.createElement('div');
closeButton.innerText = 'x';
modalInner.prepend (closeButton);

closeButton.style.cssText = `
font-size:30px; 
position:relative; 
display:inline; 
padding:20px; 
bottom:80px; 
left:300px; 
cursor:pointer;`

closeButton.addEventListener('click', () => {
    modal.style.display = '';
})



}

modal()