const Product = require('../models/Product');


exports.list = async (req, res) => {
const products = await Product.find().limit(100);
res.json(products);
};


exports.get = async (req, res) => {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ message: 'Not found' });
res.json(p);
};


exports.create = async (req, res) => {
const { title, description, price, images, category, stock } = req.body;
const p = new Product({ title, description, price, images, category, stock });
await p.save();
res.json(p);
};


exports.update = async (req, res) => {
const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(p);
};
