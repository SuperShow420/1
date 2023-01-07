const path =  window.location.href.replace("%20", " ")
const pathParams = path.split('/')

console.log(pathParams)

let reqAnime = pathParams[4]

const Search = Anime.filter((Name) => {
    return Name.animeName.toLocaleLowerCase().startsWith(reqAnime.toLocaleLowerCase())
})

console.log(Search)

for (let i = 0; i < Name[0]; i++) {

    Search[i]

}