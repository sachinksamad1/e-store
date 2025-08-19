const express = require("express");
const products = express.Router();
const pool = require("../shared/pool");

products.get("/", (req, res) => {
  const mainCategoryId = req.query.maincategoryid;
  const subCategoryId = req.query.subcategoryid;

  let query = "select * from products";
  let queryParams = [];

  if (mainCategoryId) {
    query = `select products.* from products join categories on products.category_id = categories.id where categories.parent_category_id = ?`;
    queryParams.push(mainCategoryId);
  } else if (subCategoryId) {
    query += " where category_id = ?";
    queryParams.push(subCategoryId);
  }

  pool.query(query, queryParams, (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

products.get("/:id", (req, res) => {
  let id = req.params.id;
  pool.query("select * from products where id = ?", [id], (error, products) => {
    if (error) res.status(500).send(error);
    else res.status(200).send(products);
  });
});

module.exports = products;
