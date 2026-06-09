const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("This is the homepage"));
indexRouter.get("/about", (req, res) => res.send("This is the about page"));
indexRouter.get("/contact", (req, res) => res.send("This is the contact page"));
indexRouter.post("/contact", (req, res) =>
  res.send("This is the contact page post")
);

module.exports = indexRouter;
