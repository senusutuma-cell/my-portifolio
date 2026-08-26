const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

// Static and specialized query routes MUST come before dynamic ID routes
router.get('/search', controller.searchProducts);
router.get('/low-stock', controller.getLowStock);
router.get('/value', controller.getTotalValue);
router.get('/category/:category', controller.getByCategory);
router.get('/price/:price', controller.getUnderPrice);

// Standard CRUD routes
router.get('/', controller.getAllProducts);
router.post('/', controller.createProduct);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;