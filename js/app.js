let canvas = document.querySelector('.canvas');
let colorPalette = document.querySelector('.color_palette');
let color=getComputedStyle(colorPalette.children[0]).backgroundColor;
let previousBlock=colorPalette.children[0];

colorPalette.addEventListener('click',function(event){
    previousBlock.classList.remove('active');
    color=getComputedStyle(event.target).backgroundColor;
    event.target.classList.add('active');
    previousBlock=event.target;
})

canvas.addEventListener('click',function(event){
    if(event.target.classList.contains('pixel'))
        event.target.style.backgroundColor=color;  
})