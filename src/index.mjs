import { ENV } from "./config/env.mjs";
import express from "express";

const delilahAPI = express();
const port = ENV.SERVER_PORT || 3000;

delilahAPI.get("/products", (req, res) => {
  res.send("Hello World!");
});

delilahAPI.get("/teapots", (req, res) => {
  res.send({ message: "We cannot brew coffee since we are teapots." });
});

delilahAPI.listen(port, () => {
  console.log(`Delilah Resto Server listening on port ${port}`);
});
