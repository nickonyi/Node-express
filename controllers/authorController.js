import db from "../db.js";
import CustomErrorNotFound from "../errors/CustomNotFoundError.js";

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));
  if (!author) {
    throw new CustomErrorNotFound("Author not found!!!");
  }

  res.send(`Author name:${author.name}`);
};

export default getAuthorById;
