import React from 'react';
import './Products.css';
// Removed the incomplete import statement

function Products() {
  const products = [ 
    { id: 1, name: 'Wireless Mouse', price: '₹1,200', stock: 'In Stock' },
    { id: 2, name: 'Bluetooth Speaker', price: '₹3,500', stock: 'Out of Stock' },
    { id: 3, name: 'USB Cable', price: '₹300', stock: 'In Stock' },
    { id: 4, name: 'Keyboard', price: '₹2,000', stock: 'In Stock' },
  ];

  return (
    <div className="products-container">
      <h1>Products</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className={product.stock === 'In Stock' ? 'in-stock' : 'out-of-stock'}>
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
