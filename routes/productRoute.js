const express = require("express");
const {
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/products", getProduct);
router.post("/products", postProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct);

module.exports = router;
