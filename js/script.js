document.getElementById("m-menu-icon").addEventListener("click", ()=>{
    if(!isMobileMenuOpen) {
        document.getElementById("m-menu").classList.remove("ham-menu-hidden")
        document.getElementById("m-menu").classList.add("ham-menu-visible")
        document.body.classList.toggle("body-overflow")
        document.getElementById("bg-black").classList.toggle("background-black-cover-on")
        document.getElementById("bg-black-2").classList.toggle("background-black-cover-on-2")
        document.getElementById("ham-but-1").classList.remove("hamburger-pointer-events-none")
        document.getElementById("ham-but-2").classList.remove("hamburger-pointer-events-none")
        document.getElementById("ham-but-3").classList.remove("hamburger-pointer-events-none")
        isMobileMenuOpen = true;
    }
    else {
        document.getElementById("m-menu").classList.remove("ham-menu-visible")
        document.getElementById("m-menu").classList.add("ham-menu-hidden")
        document.body.classList.toggle("body-overflow")
        document.getElementById("bg-black").classList.toggle("background-black-cover-on")
        document.getElementById("bg-black-2").classList.toggle("background-black-cover-on-2")
        document.getElementById("ham-but-1").classList.add("hamburger-pointer-events-none")
        document.getElementById("ham-but-2").classList.add("hamburger-pointer-events-none")
        document.getElementById("ham-but-3").classList.add("hamburger-pointer-events-none")
        isMobileMenuOpen = false;
    }
})
let isMobileMenuOpen = false;

// Слайд-шоу
let currentSlide = 1;

let afkTimer;

function updateSlides() {
    let images = document.querySelectorAll("[id^='image']");
    let information = document.querySelectorAll("[id^=information]");
    // let posterInfo = document.querySelectorAll("[id^=poster]");
    console.log(currentSlide);

    function slide(){
        // poster[currentSlide-1].classList.add('poster-shrink');
        images[currentSlide-1].classList.add('image-smooth');
        images[currentSlide-1].classList.add('swiped-left');
        information[currentSlide-1].classList.add('image-smooth');
        currentSlide++;
    }

    if(currentSlide < 4){
        slide();
    }else{
        for (const i of images) {
            i.classList.remove('swiped-left');
            // i.classList.remove('swiped-right');
            i.classList.remove('image-smooth');
        }
        for (const j of information) {
            j.classList.remove('image-smooth');
        }
        // for (const k of posterInfo) {
        //     k.classList.remove('poster-shrink');
        // }
        currentSlide = 1;
        setTimeout(slide, 20);
    }
}

function reverseSlides() {
    let images = document.querySelectorAll("[id^='image']");
    let information = document.querySelectorAll("[id^=information]");

    console.log('prev',currentSlide);

    function slide(){
        images[currentSlide-2].classList.add('image-smooth');
        images[currentSlide-2].classList.remove('swiped-left');
        information[currentSlide-2].classList.add('image-smooth');
        currentSlide--;
    }

    if(currentSlide === 4){
        images[2].classList.add('image-smooth');
        images[2].classList.remove('swiped-left');
        information[2].classList.add('image-smooth');
        currentSlide = 3;
    }
    else if(currentSlide > 1){
        slide();
    }
    else {
        for (const i of images) {
            i.classList.add('swiped-left');
            i.classList.remove('image-smooth');
        }
        currentSlide = 4;
        setTimeout(slide, 20);
    }
}

function resetTimer() {
    clearInterval(afkTimer);
    afkTimer = setInterval(updateSlides, 5000);
}

function nextCallback(e) {
    resetTimer();
    updateSlides();
}

function previousCallback(e) {
    resetTimer();
    reverseSlides();
}

(()=>{
    afkTimer = setInterval(updateSlides, 5000);
    document.getElementById('next-button').addEventListener('click', nextCallback);
    document.getElementById('previous-button').addEventListener('click', previousCallback);
})()