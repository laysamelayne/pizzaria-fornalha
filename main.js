

function openMenu() {
    document.querySelector('#main nav').classList.add('show')
}

function closeMenu() {
    document.querySelector('#main nav').classList.remove('show')

    
}

function openCardapio(){
    document.querySelector('#cardapio').classList.add('show')

    closeCardapio()
}

function closeCardapio(){
    let section = document.querySelector('#cardapio');
    section.addEventListener('click', function(e){
        document.querySelector('#cardapio').classList.remove('show')
    })
}

