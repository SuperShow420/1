const SearchInput = document.querySelector(".search-input")
const SearchResultWrapper = document.querySelector(".search-result-wrapper-main")
const SearchResult = document.querySelector(".search-result")


SearchInput.addEventListener("input", SearchAnime)
document.querySelector("body").addEventListener("click", SearchAnimeToggle)

function SearchAnime() {
    SearchResultWrapper.style.display = "flex"

    console.log(SearchInput.value)

    
    const name = Anime.filter((Name) => {
        let searchanime = SearchInput.value
        return Name.animeName.toLocaleLowerCase().startsWith(searchanime.toLocaleLowerCase())
    })

    console.log(name)

    SearchResult.innerHTML = ""
    for (let index = 0; index < name.length; index++) {
            SearchResult.innerHTML += `<a class="anime-a" href="http://localhost:3000/watch/` + name[index].animeName + `" >
        <div class="anime-info">
        <div class="anime-img-wrapper">
            <img src="` + name[index].imgVertical + `" alt="" class="anime-img">
        </div>
        <div class="anime-info-wrapper">
            <div class="anime-title-wrapper">
                <p class="anime-title">` + name[index].animeName +`</p>
            </div>
            <div class="episode-amount-wrapper">
                <p class="episodes">Episodes</p>
                <p class="episode-amount">` + name[index].episodesRuntime + `</p>
            </div>
            <div class="type-wrapper">
                <p class="anime-type">` + name[index].type + `</p>
            </div>
        </div>
        </div>
        </a>
        `
        
    }
    

SearchResultWrapper.style.height = document.querySelectorAll(".anime-info").length*6 + 0.2 + "vw"

}

function SearchAnimeToggle (e) {
    if (e.target.className == ["anime-a", "search-input", "search-result-wrapper-main", "search-result"]) {
    } else {
        SearchResultWrapper.style.display = "none"   
    }
}