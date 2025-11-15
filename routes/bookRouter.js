const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All the books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID reserved: ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID reserve booked: ${bookId}`);
});

module.exports = bookRouter;
