const { Router } = require("express");
const { getAuthorById } = require("../controller/authController");

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("all authors"));
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
