const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    price: { type: Number, required: true },
    status: { type: String, default: 'In Stock' }
});

module.exports = mongoose.model('Product', productSchema);
