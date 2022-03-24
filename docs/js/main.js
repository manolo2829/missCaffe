const comida = [
    {
        category: 'menu__cafes',
        img: './img/coffee-geaea58a4f_640.jpg',
        title: 'Caffe cup'
    },{
        category: 'menu__cafes',
        img: './img/coffee-watercolor-g299b9b592_640.jpg',
        title: 'Caffe cup2'
    },{
        category: 'menu__cafes',
        img: './img/coffee-geaea58a4f_640.jpg',
        title: 'Caffe cup3'
    },{
        category: 'menu__cafes',
        img: './img/coffee-geaea58a4f_640.jpg',
        title: 'Caffe cup4'
    },{
        category: 'menu__cafes',
        img: './img/coffee-watercolor-g299b9b592_640.jpg',
        title: 'Caffe cup5'
    },{
        category: 'menu__jugos',
        img: './img/fresh-orange-juice-g4be5f11f0_640.jpg',
        title: 'jugo1'
    },{
        category: 'menu__jugos',
        img: './img/fresh-orange-juice-g4be5f11f0_640.jpg',
        title: 'jugo2'
    },{
        category: 'menu__jugos',
        img: './img/fresh-orange-juice-g4be5f11f0_640.jpg',
        title: 'jugo3'
    },{
        category: 'menu__tortas',
        img: './img/cake-ge2c9b6ada_640.jpg',
        title: 'torta1'
    },{
        category: 'menu__tortas',
        img: './img/red-velvet-cake-g3317d1d8a_640.jpg',
        title: 'torta2'
    },{
        category: 'menu__promos',
        img: './img/toast-g004a71154_640.jpg',
        title: 'promo'
    },{
        category: 'menu__promos',
        img: './img/breakfast-g20c02774c_640.jpg',
        title: 'promo2'
    }
]

let comidaFiltrada = comida

const menuContainer = document.querySelector('.menu__container')
const cafeButoon = document.querySelector('#menu__cafes');
const tortasButton = document.querySelector('#menu__tortas');
const jugosButton = document.querySelector('#menu__jugos');
const promosButton = document.querySelector('#menu__promos');
const todosButton = document.querySelector('#menu__todos');

const previous = document.querySelector('#previous')
const next = document.querySelector('#next')

let offset = 0;
let limit = 7;

let category = 'todos'

// FUNCIONES

cafeButoon.addEventListener('click', () =>{
    filtro('menu__cafes')
})
tortasButton.addEventListener('click', () =>{
    filtro('menu__tortas')
})
jugosButton.addEventListener('click', () =>{
    filtro('menu__jugos')
})
promosButton.addEventListener('click', () =>{
    filtro('menu__promos')
})
todosButton.addEventListener('click', () =>{
    comidaFiltrada = comida
    removeChildNodes(menuContainer)
    generatorCards(offset, limit)
})

function filtro(category){
    removeChildNodes(menuContainer)
    comidaFiltrada = comida.filter( item => item.category === category).map( item => {
        createCard(comida[comida.indexOf(item)])
    })
}


previous.addEventListener('click', () => {
    if (offset != 0) {
        offset -= 8;
        removeChildNodes(menuContainer);
        generatorCards(offset, limit)
    }
    
});

next.addEventListener('click', () => {
    if (offset <= comidaFiltrada.length - 8){
        offset += 8;
        removeChildNodes(menuContainer);
        generatorCards(offset, limit)
    }
});





function generatorCard(id) {
    createCard(comida[id])
}

function generatorCards(offset, limit) {
    for (let i = offset; i <= offset + limit ; i++) {
        generatorCard(i);
    }
}

function createCard(card){

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('menu__card__container')
    cardContainer.classList.add('col-sm-12')
    cardContainer.classList.add('col-md-6')
    cardContainer.classList.add('col-lg-3')

    const cardFront = document.createElement('div')
    cardFront.classList.add('menu__card__front')
    cardFront.classList.add('menu__card__div')



    const cardBack = document.createElement('div')
    cardBack.classList.add('menu__card__back')
    cardBack.classList.add('menu__card__div')
    cardBack.classList.add('mx-1')
    cardBack.classList.add('my-3')





    const cardBackText = document.createElement('p')
    cardBackText.classList.add('text-center')
    cardBackText.classList.add('text-light')
    cardBackText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, velitsadasdasdasdasdasdas.'
    cardBack.appendChild(cardBackText)

    const cardImgContainer = document.createElement('div')
    cardImgContainer.classList.add('row')

    const cardImg = new Image()
    cardImg.classList.add('w-100')
    cardImg.classList.add('rounded')
    cardImg.classList.add('col-12')
    cardImg.classList.add('menu__card__img')
    cardImg.src = card.img

    const cardBody = document.createElement('div')
    cardBody.classList.add('w-100')

    const cardTitleContainer = document.createElement('div')
    cardTitleContainer.classList.add('row')
    cardTitleContainer.classList.add('align-items-center')
    cardTitleContainer.classList.add('py-2')

    

    const cardTitle = document.createElement('h4')
    cardTitle.classList.add('text-center')
    cardTitle.classList.add('col-6')
    cardTitle.textContent = card.title

    const hrContainer = document.createElement('div')
    const hr = document.createElement('hr')
    hrContainer.appendChild(hr)
    hrContainer.classList.add('col')

    const hrContainer2 = document.createElement('div')
    const hr2 = document.createElement('hr')
    hrContainer2.appendChild(hr2)
    hrContainer2.classList.add('col')

    const cardPriceContainer = document.createElement('div')
    cardPriceContainer.classList.add('row')
    const price = document.createElement('p')
    price.classList.add('w-100')
    price.classList.add('text-center')
    price.textContent = '100$'

    cardImgContainer.appendChild(cardImg)

    cardTitleContainer.appendChild(hrContainer)
    cardTitleContainer.appendChild(cardTitle)
    cardTitleContainer.appendChild(hrContainer2)

    cardPriceContainer.appendChild(price)

    cardBody.appendChild(cardTitleContainer)
    cardBody.appendChild(cardPriceContainer)

    cardFront.appendChild(cardImgContainer)
    cardFront.appendChild(cardBody)

    cardContainer.appendChild(cardFront)
    cardContainer.appendChild(cardBack)

    menuContainer.append(cardContainer)


    

    
    // const cardContainer = document.createElement('div')
    // cardContainer.classList.add('col-sm-12')
    // cardContainer.classList.add('col-md-6')
    // cardContainer.classList.add('col-lg-3')


    // const cardImg = new Image()
    // cardImg.classList.add('w-100')
    // cardImg.classList.add('rounded')
    // cardImg.classList.add('menu__card__img')
    // cardImg.src = card.img

    // const cardBody = document.createElement('div')
    // cardBody.classList.add('row')

    // const cardTitle = document.createElement('h4')
    // cardTitle.classList.add('w-100')
    // cardTitle.classList.add('text-center')
    // cardTitle.textContent = card.title

    // const cardTitleContainer = document.createElement('div')
    // cardTitleContainer.classList.add('col-5')

    // const cardDiv = document.createElement('div')
    // cardDiv.classList.add('col')

    // const cardDiv2 = document.createElement('div')
    // cardDiv2.classList.add('col')

    // const cardHr = document.createElement('hr')
    // const cardHr2 = document.createElement('hr')

    // cardDiv2.appendChild(cardHr2)
    // cardDiv.appendChild(cardHr)
    // cardBody.appendChild(cardDiv)
    // cardTitleContainer.appendChild(cardTitle)
    // cardBody.appendChild(cardTitleContainer)
    // cardBody.appendChild(cardDiv2)
    // cardContainer.appendChild(cardImg)
    // cardContainer.appendChild(cardBody)

    // menuContainer.appendChild(cardContainer)

}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

generatorCards(offset, limit)
