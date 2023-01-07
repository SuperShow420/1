const express = require('express')
const fs = require('fs')
const path = require('path')
const { setTimeout } = require('timers')
const app = express()
const router = express.Router()

router.get(['/', '/home'], (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

router.get(['/watch', '/watch/:anime', '/watch/:anime/:episode'], (req, res) => {
    res.sendFile(path.join(__dirname, "Video.html"))
})

router.get(['/view', '/view/:anime'], (req, res) => {
    res.sendFile(path.join(__dirname, "Anime.html"))
})

router.get(['/search', '/search/:search'], (req, res) => {
    res.sendFile(path.join(__dirname, "Search.html"))
})

module.exports = router