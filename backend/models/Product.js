backend/models/Product.js
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
price: { type: Number, required: true },
images: [String],
category: String,
stock: { type: Number, default: 999 }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);
