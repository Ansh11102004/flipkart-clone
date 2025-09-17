const Order = require('../models/Order');


exports.create = async (req, res) => {
const { items } = req.body; // items: [{ product, qty, price }]
const total = items.reduce((s, it) => s + it.qty * it.price, 0);
const order = new Order({ user: req.user.id, items, total });
await order.save();
res.json(order);
};


exports.list = async (req, res) => {
const orders = await Order.find({ user: req.user.id }).populate('items.product');
res.json(orders);
};
