import { Router } from "express";
import getAuthorById from "../controllers/authorController.js";

const authRouter = Router();

authRouter.get("/", (req, res) => res.send("All authors"));
authRouter.get("/:authorId", getAuthorById);

export default authRouter;
