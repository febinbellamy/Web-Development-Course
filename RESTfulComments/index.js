const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "Consequatur optio amet id eum quidem aliquid cum nulla, deserunt sed quam, dolorem modi quod illum ipsam placeat assumenda necessitatibus? Sed vel nulla maxime asperiores quisquam sit temporibus at labore.",
  },
  {
    id: uuid(),
    username: "Jerry",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit nisi hic. Soluta, maiores, mollitia doloribus tempora est quidem, sequi sint ducimus dolor consequuntur ipsum dolorum accusantium magnam consequatur a.",
  },
  {
    id: uuid(),
    username: "Woof",
    comment: "Ad praesentium cum incidunt, officiis dignissimos doloremque dolor ducimus quasi exercitationem saepe repellendus. Sint veniam aliquam error, est minima maxime voluptates eligendi placeat assumenda in nihil distinctio quibusdam recusandae quod!",
  },
];

app.get('/comments', (req, res) => { 
  res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const {username, comment} = req.body;
  comments.push({ username, comment, id: uuid() })
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
})
 
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id)
  res.redirect('/comments')
})

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.get('/tacos', (req, res) => {
  res.send('GET / tacos response')
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(8000, () => {
  console.log("On Port 8000!");
})
