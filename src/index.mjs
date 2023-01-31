import { ENV } from "./config/env.mjs";
import express from "express";
const Product = require("./models/product.mjs");

const app = express();
const port = ENV.SERVER_PORT || 3000;

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Product ${id} found!!`);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Product ${id} updated!!`);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Product ${id} deleted!!`);
});

app.get("/products", (req, res) => {
  res.send("Products found!");
});

app.post("/products", (req, res) => {
  res.send("Product created!");
});

app.get("/teapots", (req, res) => {
  res.send({ message: "I cannot brew coffee since I'm a teapot." });
});

app.listen(port, () => {
  console.log(`Delilah Resto Server listening on port ${port}`);
});
