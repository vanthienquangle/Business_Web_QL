import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Hàm gọi API để lấy danh sách sản phẩm
  const fetchProducts = async () => {
    try {
      // Sử dụng proxy để gọi API
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Cloth Shop Inventory</h1>
      <div>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
