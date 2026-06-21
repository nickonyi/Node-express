import db from "../db.js";

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));
  if (!author) {
    res.status(404).send("Author not found!");
    return;
  }

  res.send(`Author name:${author.name}`);
};

export default getAuthorById;
