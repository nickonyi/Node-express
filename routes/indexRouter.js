import { Router } from "express";

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) =>
  res.render("index", { links: links, users: users }),
);
indexRouter.get("/about", (req, res) => res.send("About page"));
indexRouter.get("/contact", (req, res) => res.send("Contact page"));
indexRouter.post("/contact", (req, res) => res.send("Contact form submitted"));

export default indexRouter;
