const express = require("express");
const app = express();
console.log(app.router);

app.get("/", (req, res) => res.send("Hello world"));
app.get("/:username/messages", (req, res) => {
  console.log("router parameters", req.params);
  console.log("query parameters", req.query);

  res.end();
});

app.get("/:username/messages/:sadam", (req, res) => {
  console.log(req.params);
  res.end();
});
const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening at PORT:${PORT}`);
});
