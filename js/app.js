let canvas = document.querySelector('.canvas');
let colorPalette = document.querySelector('.color_palette');
let color=window.getComputedStyle(colorPalette.children[0]).backgroundColor;
let previousBlock=colorPalette.children[0];

colorPalette.addEventListener('click',function(event){
    if(event.target.classList.contains('color_block')){
        previousBlock.classList.remove('active');
        color=window.getComputedStyle(event.target).backgroundColor;
        event.target.classList.add('active');
        previousBlock=event.target;
    }
})

canvas.addEventListener('click',function(event){
    if(event.target.classList.contains('pixel'))
        event.target.style.backgroundColor=color;  
})
let card = document.querySelectorAll('.card');
for(let i=0;i<card.length;i++){
    card[i].addEventListener('click',function(){
        if(card[i].classList.contains('rotate_front')){
            card[i].classList.remove('rotate_front')
            card[i].classList.add('rotate_back')
        }
        else{
            card[i].classList.remove('rotate_back')
            card[i].classList.add('rotate_front')
        }
    })
}