let prevBut = document.getElementById('but-prev');
let nextBut = document.getElementById('but-next');
let container = document.querySelector('.Container')
let Items = container.querySelectorAll('.List .Item');
let Indicator = document.querySelector('.Indicadores');
let dots = Indicator.querySelectorAll('ul li');

let active = 0;
let PrimeiraPosicao = 0;
let UltimaPosicao = Items.length - 1;


nextBut.onclick = ( ) => {
    let itemOld = container.querySelector('.List .Item.Active');
    itemOld.classList.remove('Active')

    active = active + 1 > UltimaPosicao ? 0 : active + 1
    Items[active].classList.add('Active');

    let dotsOld
    
}

prevBut.onclick = ( ) => {

    let itemOld = container.querySelector('.List .Item.Active');
    itemOld.classList.remove('Active')

    active = active - 1 < PrimeiraPosicao ? UltimaPosicao : active - 1
    Items[active].classList.add('Active');
    
}


