const express = require("express");
const path = require("node:path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
//app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];
app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).send(error.message);
});
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at PORT:${PORT}`);
});
