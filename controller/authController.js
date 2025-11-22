// controllers/authorController.js

const db = require("../db");
const customNotFoundError = require("../errors/CustomNotFoundError");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new customNotFoundError("ze author iz not found");
  }

  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };
