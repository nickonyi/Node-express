import express from "express";
import bodyParser from "body-parser";

const app = express();

const employees = [
  { firstName: "Jane", lastName: "Smith", age: 20 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Mary", lastName: "Green", age: 25 },
];

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.body;
  let results = [...employees];

  if (firstName) {
    results = results.filter((r) => r.firstName === firstName);
  }

  if (lastName) {
    results = results.filter((r) => r.lastName === lastName);
  }

  if (age) {
    results = results.filter((r) => +r.age === +age);
  }

  res.json(results);
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(console.log(`My first Express app - listening on port ${PORT}!`));
});
