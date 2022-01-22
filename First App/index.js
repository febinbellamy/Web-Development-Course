const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit}</h1>`)
})

 app.get('/r/:subreddit/:postId', (req, res) => {
     const { subreddit, postId } = req.params;
     res.send(`<h1>Viewing Post ID: ${postId}</h1>`)
 })

 app.post('/cats', (req, res) => {
     res.send('Post request to /cats')
 })

 app.get('/cats', (req, res) => {
     res.send('Meow!')
 })