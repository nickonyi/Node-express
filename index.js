import express from "express";

const app = express();

app.get("/messages", (req, res) => {
  res.send(
    "This route will not be reached because the previous route's path matches first.",
  );
});

app.get("/{*splat}", (req, res) => {
  res.send(
    "/{*splat} is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.",
  );
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
