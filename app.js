const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world"));

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at PORT:${PORT}`);
});
