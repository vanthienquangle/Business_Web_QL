const express = require('express');
const router = express.Router();
const { addProduct, getProducts, deleteProduct } = require('../controllers/productController');

// Product routes
router.post('/add', addProduct);
router.get('/', getProducts);
router.delete('/delete/:id', deleteProduct);

module.exports = router;
