import './scss/style.scss'


const btnChange = document.getElementById('btnChange');
const card = document.getElementById('card');
const container  = document.getElementById('container');
const btnOrientation  = document.getElementById('btnOrientation');

btnChange.addEventListener('click',()=>{
    container.classList.toggle('container--dark');
    if(btnChange.classList.contains('fa-moon')){
        btnChange.className = 'fa-solid fa-sun'
    }else{
        btnChange.className = 'fa-solid fa-moon'
    }
})

btnOrientation.addEventListener('click',()=>{
    card.classList.toggle('card--2');
    if(btnOrientation.classList.contains('fa-grip-lines')){
        btnOrientation.className = 'fa-solid fa-grip-lines-vertical'
    }else{
        btnOrientation.className = 'fa-solid fa-grip-lines'
    }
})