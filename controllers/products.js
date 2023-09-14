const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({});
	res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const queryObject = {};

	let result = Product.find(queryObject);

	const products = await result;

	res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
