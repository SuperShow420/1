const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const url = require('url')
const port = 3001


app.use(express.static(path.join(__dirname, "/ShowAnime")))
app.use(express.static(path.join(__dirname, "/ShowAnime/CsS/ShowAnimeVideoPage.css")))
app.use('/', require(__dirname + "/ShowAnime/route.js"))


app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
    console.log(__dirname, path)
})
