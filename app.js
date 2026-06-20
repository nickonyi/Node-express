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

app.use((req, res) => {
  console.log(req.customProperty);

  res.send("Hello");
});

app.use("/authors", authRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
