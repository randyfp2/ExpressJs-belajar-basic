const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello welcome to Express.js Randyyyyyy!"));
app.get("/:name", (req, res) => res.send(`Nama saya : ${req.params.name}`)); //es6 dan membuat routing parameter

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
