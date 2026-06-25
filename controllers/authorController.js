import db from "../db.js";
import CustomErrorNotFound from "../errors/CustomNotFoundError.js";

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  try {
    const author = await db.getAuthorById(Number(authorId));
    if (!author) {
      throw new CustomErrorNotFound("Author not found!!!");
    }

    res.send(`Author name:${author.name}`);
  } catch (err) {
    console.error("error retrieving author", err);
    res.status(500).send("Internal server error");
  }
};

export default getAuthorById;
