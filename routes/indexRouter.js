import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) =>
  res.render("index", { message: "Ejs rocks!!!" }),
);
indexRouter.get("/about", (req, res) => res.send("About page"));
indexRouter.get("/contact", (req, res) => res.send("Contact page"));
indexRouter.post("/contact", (req, res) => res.send("Contact form submitted"));

export default indexRouter;
