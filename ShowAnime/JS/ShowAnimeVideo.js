const path =  window.location.href.replace("%20", " ")
const pathParams = path.split('/')

console.log(pathParams)

let reqAnime = pathParams[4]
let reqEpisode = pathParams[5]

let currentEpisode = 1
let currentLanguage = "serversub"
let currentServer = "filemoon"


const episodeArea = document.querySelector(".episode-area")
const videoAreaAnimeImg = document.querySelector(".video-area-anime-img")
const videoAreaAnimeDetailsName = document.querySelector(".video-area-anime-details-name")
const videoAreaAnimeDetailsExtraName = document.querySelector(".video-area-anime-details-extra-name")
const videoAreaAnimeDetailsInfoType = document.querySelector(".video-area-anime-details-info-type")
const videoAreaAnimeDetailsInfoReleaseDate = document.querySelector(".video-area-anime-details-info-release-date")
const videoAreaAnimeDetailsInfoViews = document.querySelector(".video-area-anime-details-info-views")
const videoAreaAnimeDetailsInfoEpisodesRuntime = document.querySelector(".video-area-anime-details-info-episodes-runtime")
const videoAreaAnimeDetailsInfoStatus = document.querySelector(".video-area-anime-details-info-status")
const videoAreaAnimeDetailsInfoGenre = document.querySelector(".video-area-anime-details-info-genre")
const videoAreaAnimeDetailsDescription = document.querySelector(".video-area-anime-details-description")
const videoAreaRelatedAnimeItemWrapper = document.querySelector(".video-area-related-anime-item-wrapper")
const sidebarEpisodeWrapper = document.querySelector(".sidebar-episode-wrapper")
const episodeVideoIframe = document.querySelectorAll(".episode-video-iframe")


let animeInfo = Anime.filter((anime) => {
    return anime.animeName.toLocaleLowerCase = reqAnime.toLocaleLowerCase
})


if (reqEpisode) {

    episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[reqEpisode-1]
    currentEpisode = reqEpisode

    videoAreaAnimeImg.setAttribute("src", animeInfo[0].imgVerticalHighQuality) 
    videoAreaAnimeDetailsName.innerHTML = animeInfo[0].animeName
    videoAreaAnimeDetailsExtraName.innerHTML = animeInfo[0].otherNames
    videoAreaAnimeDetailsInfoType.innerHTML += animeInfo[0].type
    videoAreaAnimeDetailsInfoReleaseDate.innerHTML += animeInfo[0].releaeDate
    videoAreaAnimeDetailsInfoEpisodesRuntime.innerHTML += animeInfo[0].episodesRuntime
    videoAreaAnimeDetailsInfoStatus.innerHTML += animeInfo[0].status
    videoAreaAnimeDetailsInfoGenre.innerHTML += animeInfo[0].genre
    videoAreaAnimeDetailsDescription.innerHTML = animeInfo[0].description

    for (let i = 0; i < animeInfo[0].related.length; i++) {

        videoAreaRelatedAnimeItemWrapper.innerHTML += `<a href="http://localhost:3000/view/` + animeInfo[0].animeName + `"<div class="video-area-related-anime-item">
            <div class="video-area-related-anime-image-wrapper">
                <div class="video-area-related-anime-image">
                    <img src="` + animeInfo[0].imgVerticalHighQuality + `" alt="" class="video-area-related-anime-img">
                </div>
            </div>
            <div class="video-area-related-anime-title-wrapper">
                <div class="video-area-related-anime-title">
                    ` + animeInfo[0].animeName + `
                </div>
            </div>
        </div>
        </a>`
    }

    for (let i = 0; i < animeInfo[0].serverSub.filemoon.length; i+= 2) {
        let a = i + 1
        let index = i + 2

        sidebarEpisodeWrapper.innerHTML += ` <div class="sidebar-episode">
        <div class="episode-video-wrapper">
            <div class="episode-video">
                <i class="fa-solid fa-play"></i>
                <img src="https://akamai-images-content.com/pucp8urex7je_t.jpg" class="episode-video-thumbnail" alt="">
                ` + animeInfo[0].serverSub.filemoon[i] + `
            </div>
        </div>
        <div class="episode-title-wrapper">
            <div class="episode-title">
                ` + animeInfo[0].animeName + ` Episode ` + a + `
            </div>
        </div>
    </div>
    <div class="sidebar-episode-">
        <div class="episode-video-wrapper">
            <div class="episode-video">
                <i class="fa-solid fa-play"></i>
                <img src="https://akamai-images-content.com/pucp8urex7je_t.jpg" class="episode-video-thumbnail" alt="">
                ` + animeInfo[0].serverSub.filemoon[a] + `
            </div>
        </div>
        <div class="episode-title-wrapper">
            <div class="episode-title">
                ` + animeInfo[0].animeName + ` Episode ` + index + `
            </div>
        </div>
    </div>`
    }

    sidebarEpisodeWrapper.children[reqEpisode-1].setAttribute("id", "sidebar-episode-selected")
    sidebarEpisodeWrapper.children[reqEpisode-1].children[1].innerHTML += `<div class="currently-playing">
        CURRENTLY PLAYING
    </div>`

    if (animeInfo[0].serverSub.filemoon[reqEpisode]) {
        sidebarEpisodeWrapper.children[reqEpisode].children[1].innerHTML += `<div class="currently-next">
        NEXT
    </div>`
    }

} else {

    episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[0]

    videoAreaAnimeImg.setAttribute("src", animeInfo[0].imgVerticalHighQuality) 
    videoAreaAnimeDetailsName.innerHTML = animeInfo[0].animeName
    videoAreaAnimeDetailsExtraName.innerHTML = animeInfo[0].otherNames
    videoAreaAnimeDetailsInfoType.innerHTML += animeInfo[0].type
    videoAreaAnimeDetailsInfoReleaseDate.innerHTML += animeInfo[0].releaeDate
    videoAreaAnimeDetailsInfoEpisodesRuntime.innerHTML += animeInfo[0].episodesRuntime
    videoAreaAnimeDetailsInfoStatus.innerHTML += animeInfo[0].status
    videoAreaAnimeDetailsInfoGenre.innerHTML += animeInfo[0].genre
    videoAreaAnimeDetailsDescription.innerHTML = animeInfo[0].description

    for (let i = 0; i < animeInfo[0].related.length; i++) {

        videoAreaRelatedAnimeItemWrapper.innerHTML += `<a href="http://localhost:3000/view/` + animeInfo[0].animeName + `"<div class="video-area-related-anime-item">
            <div class="video-area-related-anime-image-wrapper">
                <div class="video-area-related-anime-image">
                    <img src="` + animeInfo[0].imgVerticalHighQuality + `" alt="" class="video-area-related-anime-img">
                </div>
            </div>
            <div class="video-area-related-anime-title-wrapper">
                <div class="video-area-related-anime-title">
                    ` + animeInfo[0].animeName + `
                </div>
            </div>
        </div>
        </a>`
    }

    for (let i = 0; i < animeInfo[0].serverSub.filemoon.length; i+= 2) {
        let a = i + 1
        let index = i + 2

        sidebarEpisodeWrapper.innerHTML += ` <div class="sidebar-episode">
        <div class="episode-video-wrapper">
            <div class="episode-video">
                <i class="fa-solid fa-play"></i>
                <img src="https://akamai-images-content.com/pucp8urex7je_t.jpg" class="episode-video-thumbnail" alt="">
                ` + animeInfo[0].serverSub.filemoon[i] + `
            </div>
        </div>
        <div class="episode-title-wrapper">
            <div class="episode-title">
                ` + animeInfo[0].animeName + ` Episode ` + a + `
            </div>
        </div>
    </div>
    <div class="sidebar-episode-">
        <div class="episode-video-wrapper">
            <div class="episode-video">
                <i class="fa-solid fa-play"></i>
                <img src="https://akamai-images-content.com/pucp8urex7je_t.jpg" class="episode-video-thumbnail" alt="">
                ` + animeInfo[0].serverSub.filemoon[a] + `
            </div>
        </div>
        <div class="episode-title-wrapper">
            <div class="episode-title">
                ` + animeInfo[0].animeName + ` Episode ` + index + `
            </div>
        </div>
    </div>`
    }

    sidebarEpisodeWrapper.children[0].setAttribute("id", "sidebar-episode-selected")

    sidebarEpisodeWrapper.children[0].children[1].innerHTML += `<div class="currently-playing">
        CURRENTLY PLAYING
    </div>`

    if (animeInfo[0].serverSub.filemoon[1]) {
        sidebarEpisodeWrapper.children[1].children[1].innerHTML += `<div class="currently-next">
        NEXT
    </div>`
    }
}

const sidebarEpisodeAll = document.querySelectorAll(".sidebar-episode")
const SidebarEpisodeAll = document.querySelectorAll(".sidebar-episode-")
const sidebarEpisode = document.querySelector(".sidebar-episode")
const SidebarEpisode = document.querySelector(".sidebar-episode-")

Array.from(sidebarEpisodeAll).forEach( (a) => {
    a.addEventListener("click", function (a) {
        const sidebarEpisodeWrapperList = Array.prototype.slice.call(sidebarEpisodeWrapper.children)
        const sidebarEpisodeIndex = sidebarEpisodeWrapperList.indexOf(a.path.at(-11))

        if (currentLanguage == "serversub") {
            
            if (currentServer == "streamsb") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.streamsb[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "filemoon") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "doodstream") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.doodstream[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "streamtape") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.streamtape[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

        } else {
            
            if (currentServer == "streamsb") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.streamsb[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "filemoon") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.filemoon[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "doodstream") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.doodstream[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "streamtape") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.streamtape[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

        }


        document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
        document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
        if (document.querySelector(".currently-next")) {
            document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
        }
        sidebarEpisodeWrapper.children[sidebarEpisodeIndex].setAttribute("id", "sidebar-episode-selected")
        sidebarEpisodeWrapper.children[sidebarEpisodeIndex].children[1].innerHTML += `<div class="currently-playing">
            CURRENTLY PLAYING
        </div>`

        if (animeInfo[0].serverSub.filemoon[sidebarEpisodeIndex+1]) {
            sidebarEpisodeWrapper.children[sidebarEpisodeIndex + 1].children[1].innerHTML += `<div class="currently-next">
            NEXT
        </div>`
        }

    })
} )

Array.from(SidebarEpisodeAll).forEach( (a) => {
    a.addEventListener("click", function (a) {
        const sidebarEpisodeWrapperList = Array.prototype.slice.call(sidebarEpisodeWrapper.children)
        const sidebarEpisodeIndex = sidebarEpisodeWrapperList.indexOf(a.path.at(-11))

        if (currentLanguage == "serversub") {
            
            if (currentServer == "streamsb") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.streamsb[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "filemoon") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "doodstream") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.doodstream[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "streamtape") {
                
                episodeArea.innerHTML = animeInfo[0].serverSub.streamtape[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

        } else {
            
            if (currentServer == "streamsb") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.streamsb[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "filemoon") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.filemoon[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "doodstream") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.doodstream[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

            if (currentServer == "streamtape") {
                
                episodeArea.innerHTML = animeInfo[0].serverDub.streamtape[sidebarEpisodeIndex]
                currentEpisode = sidebarEpisodeIndex

            }

        }

        document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
        document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
        if (document.querySelector(".currently-next")) {
            document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
        }
        sidebarEpisodeWrapper.children[sidebarEpisodeIndex].setAttribute("id", "sidebar-episode-selected")
        sidebarEpisodeWrapper.children[sidebarEpisodeIndex].children[1].innerHTML += `<div class="currently-playing">
            CURRENTLY PLAYING
        </div>`

        if (animeInfo[0].serverSub.filemoon[sidebarEpisodeIndex+1]) {
            sidebarEpisodeWrapper.children[sidebarEpisodeIndex + 1].children[1].innerHTML += `<div class="currently-next">
            NEXT
        </div>`
        }
    })
})


const SubFilemoon = document.querySelectorAll(".server")[0]
const SubDoodstream = document.querySelectorAll(".server")[1]
const SubStreamSB = document.querySelectorAll(".server")[2]
const SubStreamtape = document.querySelectorAll(".server")[3]
const DubFilemoon = document.querySelectorAll(".server")[4]
const DubDoodstream = document.querySelectorAll(".server")[5]
const DubStreamSb = document.querySelectorAll(".server")[6]
const DubStreamtape = document.querySelectorAll(".server")[7]

SubFilemoon.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[currentEpisode]
    currentLanguage = "serversub"
    currentServer = "filemoon"
})

SubDoodstream.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverSub.doodstream[currentEpisode]
    currentLanguage = "serversub"
    currentServer = "doodstream"
})

SubStreamSB.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverSub.streamsb[currentEpisode]
    currentLanguage = "serversub"
    currentServer = "streamsb"
})

SubStreamtape.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverSub.streamtape[currentEpisode]
    currentLanguage = "serversub"
    currentServer = "streamtape"
})

DubFilemoon.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverDub.filemoon[currentEpisode]
    currentLanguage = "serverdub"
    currentServer = "filemoon"
})

DubDoodstream.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverDub.doodstream[currentEpisode]
    currentLanguage = "serverdub"
    currentServer = "doodstream"
})

DubStreamSb.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverDub.streamsb[currentEpisode]
    currentLanguage = "serverdub"
    currentServer = "streamsb"
})

DubStreamtape.addEventListener("click", () => {
    episodeArea.innerHTML = animeInfo[0].serverDub.streamtape[currentEpisode]
    currentLanguage = "serverdub"
    currentServer = "streamtape"
})

const sidebarEpisodeHeaderJumpToEpisode = document.querySelector(".sidebar-episode-header-jump-to-episode")
const faSolidFaMagnifyingGlass = document.querySelector(".fa-solid.fa-magnifying-glass")
const sidebarEpisodeHeaderControlsElseWrapper = document.querySelector(".sidebar-episode-header-controls-else-wrapper")

faSolidFaMagnifyingGlass.addEventListener("click", () => {

    if (currentLanguage == "serversub") {
            
        if (currentServer == "streamsb") {
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverSub.streamsb.length) {

                episodeArea.innerHTML =  animeInfo[0].serverSub.streamsb[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }

        if (currentServer == "filemoon") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverSub.filemoon.length) {

                episodeArea.innerHTML =  animeInfo[0].serverSub.filemoon[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }
            
        }

        if (currentServer == "doodstream") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverSub.doodstream.length) {

                episodeArea.innerHTML =  animeInfo[0].serverSub.doodstream[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }

        if (currentServer == "streamtape") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverSub.streamtape.length) {

                episodeArea.innerHTML =  animeInfo[0].serverSub.streamtape[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }



    } else {
        
        if (currentServer == "streamsb") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverDub.streamsb.length) {

                episodeArea.innerHTML =  animeInfo[0].serverDub.streamsb[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }

        if (currentServer == "filemoon") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverDub.filemoon.length) {

                episodeArea.innerHTML =  animeInfo[0].serverDub.filemoon[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }

        if (currentServer == "doodstream") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverDub.doodstream.length) {

                episodeArea.innerHTML =  animeInfo[0].serverDub.doodstream[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
        
            }

        }

        if (currentServer == "streamtape") {
            
            if (sidebarEpisodeHeaderJumpToEpisode.value <= animeInfo[0].serverDub.streamtape.length) {

                episodeArea.innerHTML =  animeInfo[0].serverDub.streamtape[sidebarEpisodeHeaderJumpToEpisode.value - 1]

                currentEpisode = sidebarEpisodeHeaderJumpToEpisode.value - 1
                
                document.querySelector("#sidebar-episode-selected").removeAttribute("id", "#sidebar-episode-selected")
                document.querySelector(".currently-playing").parentElement.removeChild(document.querySelector(".currently-playing"))
                if (document.querySelector(".currently-next")) {
                    document.querySelector(".currently-next").parentElement.removeChild(document.querySelector(".currently-next"))
                }
                sidebarEpisodeWrapper.children[currentEpisode].setAttribute("id", "sidebar-episode-selected")
                sidebarEpisodeWrapper.children[currentEpisode].children[1].innerHTML += `<div class="currently-playing">
                    CURRENTLY PLAYING
                </div>`

                if (animeInfo[0].serverSub.filemoon[currentEpisode + 1]) {
                    sidebarEpisodeWrapper.children[currentEpisode + 1].children[1].innerHTML += `<div class="currently-next">
                        NEXT
                    </div>`
                }
            } else {

                sidebarEpisodeHeaderControlsElseWrapper.style.display = "flex"

                setTimeout(() => {
                    sidebarEpisodeHeaderControlsElseWrapper.style.display = "none"
                }, 9112);
                
            }

        }

    }
    
    

})

const sidebarToggleMode1 = document.querySelector(".sidebar-episode-header-control-toggle-mode-1")
const sidebarToggleMode2 = document.querySelector(".sidebar-episode-header-control-toggle-mode-2")
const sidebarRecommendedToggleWrapper = document.querySelector(".sidebar-recommended-toggle-wrapper")
const sidebarRecommendedToggleItemWrapper = document.querySelector(".sidebar-recommended-toggle-item-wrapper")
const sidebarToggleMode1Icon = document.querySelector(".fa-solid.fa-list")
const sidebarToggleMode2Icon = document.querySelectorAll(".fa-solid.fa-ellipsis-vertical")
let sidebarToggleMode = "1"

sidebarToggleMode1.addEventListener("click", () => {
    
    if (sidebarToggleMode == "2") {

        sidebarRecommendedToggleItemWrapper.innerHTML = " "
        
        sidebarToggleMode1Icon.style.color = "red"
        sidebarToggleMode2Icon[0].style.color = "unset"
        sidebarToggleMode2Icon[1].style.color = "unset"
        sidebarToggleMode2Icon[2].style.color = "unset"
        
        sidebarRecommendedToggleWrapper.style.display = "none"
        sidebarEpisodeWrapper.style.display = "flex"

        sidebarToggleMode = "1"

    } else {
        
    }

})

sidebarToggleMode2.addEventListener("click", (e) => {


    if (sidebarToggleMode == "1") {
    
        for (let i = 1; i <= animeInfo[0].serverSub.filemoon.length; i++) {
            sidebarRecommendedToggleItemWrapper.innerHTML += `<div class="sidebar-recommended-toggle-item">` + i + `</div>`
        }

        sidebarToggleMode2Icon[0].style.color = "red"
        sidebarToggleMode2Icon[1].style.color = "red"
        sidebarToggleMode2Icon[2].style.color = "red"
        sidebarToggleMode1Icon.style.color = "unset"

        sidebarEpisodeWrapper.style.display = "none"
        sidebarRecommendedToggleWrapper.style.display = "flex"

        sidebarToggleMode = "2"
        
        const sidebarRecommendedToggleItem = [...document.querySelectorAll(".sidebar-recommended-toggle-item")]

        console.log(sidebarRecommendedToggleItem)
        
        for (let index = 0; index < sidebarRecommendedToggleItem.length; index++) {
    
            sidebarRecommendedToggleItem[index].onclick = sidebarRecommendedToggleItemepisodeFunction

        }

        sidebarRecommendedToggleItem[currentEpisode - 1].setAttribute("id", "sidebar-recommended-toggle-item-selected")

    } else {
        
    }
})

function sidebarRecommendedToggleItemepisodeFunction (e) {

    if (currentLanguage == "serversub") {

        if (currentServer == "streamsb") {
            
            episodeArea.innerHTML = animeInfo[0].serverSub.streamsb[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "filemoon") {
            
            episodeArea.innerHTML = animeInfo[0].serverSub.filemoon[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "doodstream") {
            
            episodeArea.innerHTML = animeInfo[0].serverSub.doodstream[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "streamtape") {
            
            episodeArea.innerHTML = animeInfo[0].serverSub.streamtape[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

    }

    if (currentLanguage == "serverdub") {
        
        if (currentServer == "streamsb") {
            
            episodeArea.innerHTML = animeInfo[0].serverDub.streamsb[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "filemoon") {
            
            episodeArea.innerHTML = animeInfo[0].serverDub.filemoon[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "doodstream") {
            
            episodeArea.innerHTML = animeInfo[0].serverDub.doodstream[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

        if (currentServer == "streamtape") {
            
            episodeArea.innerHTML = animeInfo[0].serverDub.streamtape[e.target.innerHTML - 1]

            currentEpisode = e.target.innerHTML

            document.querySelector("#sidebar-recommended-toggle-item-selected").removeAttribute("id")

            e.target.setAttribute("id", "sidebar-recommended-toggle-item-selected")

        }

    }

}
