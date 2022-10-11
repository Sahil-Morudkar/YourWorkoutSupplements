let btn = document.querySelector('.btn')
let links = document.querySelector('.links')
let prevbtn = document.querySelector('.prev-btn')
let nextbtn = document.querySelector('.next-btn')
let slides = document.querySelectorAll('.slider')



let counter = 0

btn.addEventListener('click', function () {
    links.classList.toggle('show-links')
})

slides.forEach(function (slides, index) {
    slides.style.left = `${index * 100}%`
})

nextbtn.addEventListener('click', function () {
    counter++
    slider()
})
prevbtn.addEventListener('click', function () {
    counter--
    slider()
})

function slider() {
    if (counter === slides.length) {
        counter = 0
    } if (counter < 0) {
        counter = slides.length - 1
    }
    slides.forEach(function (slides) {
        slides.style.transform = `translateX(-${counter * 100}%)`
    })
}

