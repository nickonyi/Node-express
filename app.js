import express from "express";
import url from "url";
import path from "path";

const app = express();

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

console.log(__dirName);

app.get("/", (req, res) => res.sendFile(__dirName + "/pages/index.html"));
app.get("/about", (req, res) => res.sendFile(__dirName + "/pages/about.html"));
app.get("/contact", (req, res) =>
  res.sendFile(__dirName + "/pages/contact.html"),
);

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
