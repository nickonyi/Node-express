import express from "express";

const app = express();

app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.send();
});

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.send();
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
