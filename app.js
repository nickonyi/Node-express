const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.get("/messages", (req, res) => {
  res.send(
    "This route will not be reached because the previous route's path matches first"
  );
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(err.statusCode || 500).send(err.message);
});
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at PORT:${PORT}`);
});
