const path =  window.location.href.replace("%20", " ")
const pathParams = path.split('/')

console.log(pathParams)

let reqAnime = pathParams[4]

const MainAnimeBackgroundImg = document.querySelector(".main-anime-background-img")
const MainInfoImage = document.querySelector(".main-info-image")
const MainAnimeInfoRightTitle = document.querySelector(".main-anime-info-right-title")
const MainAnimeInfoRightType = document.querySelector(".main-anime-info-right-type")
const MainAnimeInfoRightViews = document.querySelector(".main-anime-info-right-views")
const MainAnimeInfoRightEpDuration = document.querySelector(".main-anime-info-right-ep-duration")
const MainAnimeInfoRightStatus = document.querySelector(".main-anime-info-right-status")
const MainAnimeInfoRightDate = document.querySelector(".main-anime-info-right-date")
const MainAnimeInfoRightStudio = document.querySelector(".main-anime-info-right-studio")
const MainAnimeInfoRightGenre = document.querySelector(".main-anime-info-right-genre")
const MainAnimeInfoRightDescription = document.querySelector(".main-anime-info-right-description")
const MainAnimeInfoRightOtherNames = document.querySelector(".main-anime-info-right-other-names")
const MainAnimeRelatedAnimeItemWrapper = document.querySelector(".main-anime-related-anime-item-wrapper")


let animeInfo = Anime.filter((anime) => {
    return anime.animeName.toLocaleLowerCase = reqAnime.toLocaleLowerCase
})

console.log(animeInfo)

if (reqAnime) {
    if (animeInfo[0].imgHorizontalHighQuality !== "") {

        MainAnimeBackgroundImg.setAttribute("src", animeInfo[0].imgHorizontalHighQuality)
        
    }
    MainInfoImage.setAttribute("src", animeInfo[0].imgVerticalHighQuality)
    MainAnimeInfoRightTitle.innerHTML = animeInfo[0].animeName
    MainAnimeInfoRightType.innerHTML = animeInfo[0].type
    MainAnimeInfoRightEpDuration.innerHTML += animeInfo[0].episodesRuntime
    MainAnimeInfoRightStatus.innerHTML += animeInfo[0].status
    MainAnimeInfoRightDate.innerHTML += animeInfo[0].releaeDate
    MainAnimeInfoRightStudio.innerHTML += animeInfo[0].studio
    for (let index = 0; index < animeInfo[0].genre.split(",").length; index++) {

        console.log(animeInfo[0].genre.split(",")[index])

        MainAnimeInfoRightGenre.innerHTML += `<a>` + animeInfo[0].genre.split(",")[index] + ` ,</a>`
        
    }
    MainAnimeInfoRightDescription.innerHTML = animeInfo[0].description
    MainAnimeInfoRightOtherNames.innerHTML = animeInfo[0].otherNames

    const AnimeRelatedLength = animeInfo[0].related.length

    for (let i = 0; i < animeInfo[0].related.length; i++) {

        let RelatedAnime = Anime.filter((anime) => {
            return anime.animeName.toLocaleLowerCase = animeInfo[0].related[i].toLocaleLowerCase
        })

        MainAnimeRelatedAnimeItemWrapper.innerHTML += `<a href="http://localhost:3000/watch/` + RelatedAnime[0].animeName + `>
        <div class="anime-related-anime-item">
            <div class="anime-related-anime-item-image-wrapper">
                <img src="` + RelatedAnime[0].imgVerticalHighQuality + `" alt="" class="anime-related-anime-item-image">
            </div>
            <div class="anime-related-anime-item-title-wrapper">
                <div class="anime-related-anime-item-title">` + RelatedAnime[0].animeName + `</div>
            </div>
        </div>   
        </a>`
    }
}


const numbers = []

for (let i = 0; numbers.length < 10; i++) {

    randomFunction()

    function randomFunction() {

        number = Math.floor(0 + Math.random() * 20)
        
        if (!numbers.includes(number)) {
            numbers.push(number)
        }
    }
    
}