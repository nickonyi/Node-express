const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world"));
app.get("/{*splat}", (req, res) => {
  res.send(
    "/{*splat} is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling."
  );
});

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
