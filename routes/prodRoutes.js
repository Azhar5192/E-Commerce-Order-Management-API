const express = require("express");

const router = express.Router();

const {product} = require("../controllers/prodcontrollers")

router.post("/products",product)

module.exports = router;
