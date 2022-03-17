const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');

const burger = document.getElementById('burger');
const modal = document.getElementById('modal');
const modalHeader1 = document.getElementById('modal-header1');
const modalHeader2 = document.getElementById('modal-header2');
const modalHeader3 = document.getElementById('modal-header3');

const nav = document.getElementById('nav');

header1.addEventListener('click', (e) => {
    openList(header1);
})

header2.addEventListener('click', (e) => {
    openList(header2);
})

header3.addEventListener('click', (e) => {
    openList(header3);
})

modalHeader1.addEventListener('click', (e) => {
    openList(modalHeader1);
})
modalHeader2.addEventListener('click', (e) => {
    openList(modalHeader2);
})
modalHeader3.addEventListener('click', (e) => {
    openList(modalHeader3);
})

if (burger !== null) {
    burger.addEventListener('click', (e) => {
        if (modal.classList.contains('modal__visible')) {
            modal.classList.remove('modal__visible')
            burger.src="./images/icon-hamburger.svg"
        } else {
            modal.classList.add('modal__visible');
            burger.src="./images/icon-close.svg"
        }

        console.log(modal.classList)
    })
}

function openList(element) {
    const subList = element.parentElement.querySelector('.sub-list');
    
    if (element.classList.contains('open')) {
        element.classList.remove('open');
        subList.classList.remove('sub-list__visible');
    }
    else {
        element.classList.add('open')
        subList.classList.add('sub-list__visible');
    }
}