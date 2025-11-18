const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use((req, res) => {
  // This works and this ends the request-response cycle
  res.send("Hello");

  // However, it does not exit the function so this will still run
  console.log("will still run!!");
});

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.get("/messages", (req, res) => {
  res.send(
    "This route will not be reached because the previous route's path matches first"
  );
});
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at PORT:${PORT}`);
});
