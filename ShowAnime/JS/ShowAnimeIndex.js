



function AnimationHeaderMenuIcon(event) {

    document.querySelector("#header-menu-icon-1").setAttribute("class", "header-menu-icon-on-first") 
    document.querySelector("#header-menu-icon-2").setAttribute("class", "header-menu-icon-on-second") 
    document.querySelector("#header-menu-icon-3").setAttribute("class", "header-menu-icon-on-third") 

    document.querySelectorAll(".header-menu")[1].setAttribute("onclick", "AnimationHeaderMenuIconActive(event)")
    
    document.querySelector(".menu-wrapper").style.left = "0vw"

}

function AnimationHeaderMenuIconActive(event) {

    document.querySelector("#header-menu-icon-1").setAttribute("class", "header-menu-icon") 
    document.querySelector("#header-menu-icon-2").setAttribute("class", "header-menu-icon") 
    document.querySelector("#header-menu-icon-3").setAttribute("class", "header-menu-icon") 

    document.querySelector(".header-menu").setAttribute("onclick", "AnimationHeaderMenuIcon(event)")

    document.querySelector(".menu-wrapper").style.left = "-25vw"

}

function NavItem(event) {
    
    document.querySelector(".nav-item-wrapper").children[0].setAttribute("class","nav-item")
    document.querySelector(".nav-item-wrapper").children[1].setAttribute("class","nav-item")
    document.querySelector(".nav-item-wrapper").children[2].setAttribute("class","nav-item")
    document.querySelector(".nav-item-wrapper").children[3].setAttribute("class","nav-item")

    document.querySelectorAll(".nav-item-wrapper")[1].children[0].setAttribute("class","nav-item")
    document.querySelectorAll(".nav-item-wrapper")[1].children[1].setAttribute("class","nav-item")
    document.querySelectorAll(".nav-item-wrapper")[1].children[2].setAttribute("class","nav-item")
    document.querySelectorAll(".nav-item-wrapper")[1].children[3].setAttribute("class","nav-item")

    event.target.setAttribute("class", "nav-item-selected")
}

const slider = document.querySelector(".slider"), slide = Array.from(document.querySelectorAll(".slide-page-index-first"));
 
let dragging = false,
startPosition = 0,
currentranslate = 0,
previoustranslate = 0,
animationID = 0,
currentIndex = 0

slide.forEach((slides, index) => {
    slides.addEventListener("touchstart", touchstart(index))
    slides.addEventListener("touchend", touchend)
    slides.addEventListener("touchmove", touchmove)

    slides.addEventListener("mousedown", touchstart(index))
    slides.addEventListener("mouseup", touchend)
    slides.addEventListener("mouseleave", touchend)
    slides.addEventListener("mousemove", touchmove)
})

function touchstart(index) {
    return function(event) {
        currentIndex = index
        startPosition = GetPositionX(event)
        dragging = true
        animationID = requestAnimationFrame(animation)
    }
}

function touchend() {
    dragging = false
    cancelAnimationFrame(animationID)

    const MovedBy = currentranslate - previoustranslate

    if (MovedBy < -100 && currentIndex < slide.length - 1) 
    currentIndex += 1

    if (MovedBy > 100 && currentIndex > 0) 
    currentIndex -= 1

    SetPositionIndex()
}

function touchmove(event) {
    if (dragging) {
        const currentPosition = GetPositionX(event)
        currentranslate= previoustranslate + currentPosition - startPosition
    }
}

function GetPositionX(event) {
    return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX
}

function animation() {
    SliderPosition()
    if (dragging) requestAnimationFrame(animation)
}

function SliderPosition() {
    slider.style.transform = `translateX(${currentranslate}px)`   
}

function SetPositionIndex() {
    currentranslate = currentIndex * -window.innerWidth
    previoustranslate = currentranslate
    SliderPosition()
    document.querySelector(".slide-navigation-indicator").innerHTML = -currentranslate/window.innerWidth + 1 
}

function SlideNavigationLeftFunction() {
    if (currentranslate < 0) {
        slider.style.transform = `translateX(${currentranslate + window.innerWidth}px)`
        currentranslate = currentranslate + window.innerWidth
        document.querySelector(".slide-navigation-indicator").innerHTML = -currentranslate/window.innerWidth + 1 
    } else {
        
    }
}

function SlideNavigationRightFunction() {
    if (currentranslate > -11000) {
        slider.style.transform = `translateX(${currentranslate - window.innerWidth}px)`
        currentranslate = currentranslate - window.innerWidth
        document.querySelector(".slide-navigation-indicator").innerHTML = -currentranslate/window.innerWidth + 1 
    } else {
        
    }
}

const HoverDetails = document.querySelectorAll("#details-active")
const AnimeHoverDetails = document.querySelector(".hover-anime-details-wrapper")

for(var i=0; i<HoverDetails.length; i++){
    HoverDetails[i].onmouseenter = e => { 
        AnimeHoverDetailsFunction()
        document.querySelector(".hover-anime-details-wrapper").style.display = "flex"
     function AnimeHoverDetailsFunction() {
         const VarVw = window.innerWidth/100 
         var posleft = e.target.offsetLeft + 121
         var postop = e.target.offsetTop + 121
     
         console.log(postop, posleft)
     
         document.querySelector(".hover-anime-details-wrapper").style.top = postop + "px" 
         document.querySelector(".hover-anime-details-wrapper").style.left = posleft + "px"         
     }
    }

    HoverDetails[i].onmouseleave = e => { 

        if (e.relatedTarget != document.querySelector(".hover-anime-details")) {
            
            AnimeHoverDetails.style.display = "none"

        }

    }

    AnimeHoverDetails.onmouseleave = e => {
        AnimeHoverDetails.style.display = "none"
    }
}

const LatestAnime = document.querySelectorAll(".latest-anime-wrapper")
const LatestAnimeSelect = document.querySelector(".latest-anime-selected-info-wrapper")
var LatestNumber = 0

for (let a = 0; a < LatestAnime.length; a++) {
    LatestAnime[a].onmouseenter = e => {
        LatestAnimeSelect.style.height = "21vw"
        if (LatestNumber !== 0) {          
                let transform = e.target.id-1
                document.querySelector(".latest-anime-selected-overflow").style.transform = `translateX(` + -transform*75 + `vw)`
                console.log(transform*75)
                LatestNumber = e.target.id
        }
        if (LatestNumber == 0) {
            LatestNumber = e.target.id
        }
    }

    LatestAnime[a].onmouseleave = e => {
        LatestAnimeSelect.style.height = "0"
    }
}

setTimeout(automaticSlideFunction, 5000)

function automaticSlideFunction() {
    if ( document.querySelector(".slide-navigation-indicator").innerHTML < 4 ) {
        slider.style.transform = `translateX(${currentranslate + -window.innerWidth}px)`
        document.querySelector(".slide-navigation-indicator").innerHTML = -currentranslate/window.innerWidth + 2
        console.log(-currentranslate/window.innerWidth + 2) 
        currentranslate = currentranslate + -window.innerWidth
        setTimeout(automaticSlideFunction, 5000)
    } else {
        slider.style.transform = `translateX(0)`
        document.querySelector(".slide-navigation-indicator").innerHTML = '1' 
        currentranslate = 0
        setTimeout(automaticSlideFunction, 5000)
    }
    
}

const LatestAnimeSlide = document.querySelector(".latest-anime-slide")
const LatestAnimeWrapper = document.querySelectorAll(".latest-anime-wrapper")
let LatestAnimeSlideTransform = 0
let LatestAnimeSlideIndex = 1

setTimeout(automaticLatestAnimeSlideFunction, 5000)


function automaticLatestAnimeSlideFunction() {

    console.log(LatestAnimeSlideIndex)
    console.log(LatestAnimeWrapper.length)

    if (LatestAnimeSlideIndex < LatestAnimeWrapper.length - 5) {

        LatestAnimeSlide.style.transform = `translateX(${LatestAnimeSlideTransform - 19}vw)`
        LatestAnimeSlideIndex = LatestAnimeSlideIndex + 1
        LatestAnimeSlideTransform = LatestAnimeSlideTransform - 19
    } else {
        LatestAnimeSlide.style.transition = "all 0s ease-in-out"
        LatestAnimeSlide.style.transform = "translateX(0)"
        LatestAnimeSlideIndex = 1
        LatestAnimeSlideTransform = 0
        setTimeout(() => {
            LatestAnimeSlide.style.transition = "1s"
        }, 1000)
    }

    setTimeout(automaticLatestAnimeSlideFunction, 5000)

}