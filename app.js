import express from "express";
import indexRouter from "./routes/indexRouter.js";
import bookRouter from "./routes/bookRouter.js";
import authRouter from "./routes/authorRouter.js";

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("Middleware function called");

  req.customProperty = "Hello from my middleware";

  next();
};

app.use(myMiddleware);

app.use("/authors", authRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  // You will see an OH NO! in the page, with a status code of 500 that can be seen in the network tab of the dev tools
  res.status(500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
