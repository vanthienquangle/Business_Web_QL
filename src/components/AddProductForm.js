import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm({ fetchProducts }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products/add', formData);
      fetchProducts();
      setFormData({ name: '', category: '', quantity: '', price: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Product Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        placeholder="Category"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        placeholder="Quantity"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        placeholder="Price"
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
