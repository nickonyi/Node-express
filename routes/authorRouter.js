const { Router } = require("express");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("all authors"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  console.log("AuthorId:", authorId);
});

module.exports = authorRouter;
