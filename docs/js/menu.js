(function(){
    const food = [...document.querySelectorAll('.menu__card')];
    const cafeButoon = document.querySelector('#menu__cafes');
    const tortasButton = document.querySelector('#menu__tortas');
    const jugosButton = document.querySelector('#menu__jugos');
    const promosButton = document.querySelector('#menu__promos');
    const todosButton = document.querySelector('#menu__todos');


    let value;

    cafeButoon.addEventListener('click', ()=>changePosition('cafe'));
    
    tortasButton.addEventListener('click', ()=>changePosition('tortas'));

    jugosButton.addEventListener('click', ()=>changePosition('jugos'));
    
    promosButton.addEventListener('click', ()=>changePosition('promos'));

    todosButton.addEventListener('click', ()=>changePosition('todos'));


    function changePosition(change){
        food.map(item =>{
            if(change === 'todos'){
                if(!item.className.includes('menu__card--show')){
                    item.classList.add('menu__card--show')
                }
            }
            else if(item.dataset.id === change){
                if(!item.className.includes('menu__card--show')){
                    item.classList.add('menu__card--show')
                }
            }else{
                if(item.className.includes('menu__card--show')){
                    item.classList.remove('menu__card--show')
                }
            }
        })
        items = food.filter( item => item.dataset.id === change).map( item=> item.classList.add('menu__card--show'))
    }
})()