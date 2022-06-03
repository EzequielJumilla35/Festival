const slider = document.querySelector('#slider')
let sliderSection = document.querySelectorAll('.slider__section')
let sliderSectionLast = sliderSection[sliderSection.length -1]
let btnRight = document.querySelector("#btn__right")
let btnLeft = document.querySelector("#btn__left")

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]
    slider.style.marginLeft = "-200%"
    slider.style.transition = "all 0.5s"
    setTimeout( function()  {
        slider.style.transition = "none"
        slider.insertAdjacentElement ('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "-100%"
    }, 500);
}


function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section")
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0"
    slider.style.transition = "all 0.5s"
    setTimeout( function()  {
        slider.style.transition = "none"
        slider.insertAdjacentElement ('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnRight.addEventListener('click',function () {
    next()
})

btnLeft.addEventListener('click',function () {
    Prev()
})

setInterval(() => {
    next()
}, 3000);