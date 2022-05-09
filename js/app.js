let canvas = document.querySelector('.canvas');
let colorPalette = document.querySelector('.color_palette');
let color=window.getComputedStyle(colorPalette.children[0]).backgroundColor;
let previousBlock=colorPalette.children[0];

colorPalette.addEventListener('click',function(event){
    if(event.target.classList.contains('color_palette'))
        return;
    previousBlock.classList.remove('active');
    color=window.getComputedStyle(event.target).backgroundColor;
    event.target.classList.add('active');
    previousBlock=event.target;
})

canvas.addEventListener('click',function(event){
    if(!event.target.classList.contains('canvas'))
        event.target.style.backgroundColor=color;  
})

let deckOfCards = document.querySelector('.deck_of_cards');
deckOfCards.addEventListener('click',function(event){
    if(!event.target.classList.contains('deck_of_cards'))
        event.target.classList.toggle('rotate_card');
})