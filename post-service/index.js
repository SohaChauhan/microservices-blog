const express = require("express");
const app = express();
app.use(express.json());

let posts = [];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/posts", (req, res) => {
  const { title, content, userId } = req.body;
  const newPost = { id: posts.length + 1, title, content, userId };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("Post not found");

  post.title = req.body.title;
  post.content = req.body.content;
  res.json(post);
});

app.delete("/posts/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3002, () => {
  console.log("Post Service running on http://localhost:3002");
});
