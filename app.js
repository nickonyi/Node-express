import express from "express";
import indexRouter from "./routes/indexRouter.js";
import bookRouter from "./routes/bookRouter.js";
import authRouter from "./routes/authorRouter.js";

const app = express();

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
