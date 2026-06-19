import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => res.send("All authors"));
authRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`AuthorID:${authorId}`);
});

export default authRouter;
