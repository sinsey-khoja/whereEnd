let bg = document.getElementById("bg")
let moon = document.getElementById("moon")
let mountain = document.getElementById("mountain")
let road = document.getElementById("road")
let sectionText = document.getElementById("section__text")
let theEnd = document.getElementById("the_end")


window.addEventListener('scroll' , function(){
    var value = window.scrollY ;

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = value * 0.15 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    sectionText.style.top = value * 1 + 'px'
    theEnd.style.marginTop = value * 1 + 'px'
    
})