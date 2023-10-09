// variables

let openBtn = document.getElementById('open-btn')
let modalContainer = document.getElementById('modal-container')
let closeBtn = document.getElementById('close-btn')

//Event Listeners

openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
});

window.addEventListener('click' ,function(e){

    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});


// variables

let openBtn2 = document.getElementById('open-btn2')
let modalContainer2 = document.getElementById('modal-container2')
let closeBtn2 = document.getElementById('close-btn2')

//Event Listeners

openBtn2.addEventListener('click', function(){

    modalContainer2.style.display = 'block';
});

closeBtn2.addEventListener('click', function(){

    modalContainer2.style.display = 'none';
});

window.addEventListener('click' ,function(e){

    if (e.target === modalContainer2){
        modalContainer2.style.display = 'none';
    }
});

