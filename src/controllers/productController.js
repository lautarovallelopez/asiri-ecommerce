const { Product } = require('../models/index');
const generateId = include('utils/generateId');

exports.listAllPropducts = async (req, res, next) => {
    const productList = await Product.findAll();
    return res.status(200).json(productList);
}

exports.createProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { name, description, price, stock, weight, dimensions, category } = req.body;
        const newProduct = await Product.create({
            id: generateId(),
            name,
            description,
            price,
            stock,
            weight,
            dimensions,
            category
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
