module.exports = app => {
    const productController = require('../controllers/productController');
    const router = require('express').Router();

    router.get('/products', productController.listAllPropducts);
    router.post('/products', productController.createProduct);
    app.use('/api', router);
}