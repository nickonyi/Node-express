import db from "../db.js";

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));
    if (!author) {
      res.status(404).send("Author not found!");
      return;
    }

    res.send(`Author name:${author.name}`);
  } catch (err) {
    console.error("error retrieving author", err);
    res.status(500).send("Internal server error");
  }
};

export default getAuthorById;
