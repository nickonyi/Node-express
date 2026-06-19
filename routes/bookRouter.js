import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`BookID:${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Reserve BookID:${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Reserve BookID:${bookId} - POST`);
});

export default bookRouter;
