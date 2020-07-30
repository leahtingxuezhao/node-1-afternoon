const express = require("express");

const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");

const app = express();

const port = 3002;

app.get("/api/products", getProducts);
app.get("/api/product:id", getProduct);

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
