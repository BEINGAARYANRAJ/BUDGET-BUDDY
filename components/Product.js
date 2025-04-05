// import { Link } from 'react-router-dom';
import '../styles/products.css';



const products = [
  { name: "Apple iPhone 14 Pro", price: "₹120000" },
  { name: "Samsung Galaxy S22 Ultra", price: "₹121000" },
  { name: "Google Pixel 7 Pro", price: "₹80000" },
  { name: "OnePlus 10 Pro", price: "₹50000" },
  { name: 'Apple MacBook Pro 16"', price: "₹200000" },
  { name: "Dell XPS 13", price: "₹85000" },
  { name: "HP Spectre x360", price: "₹100000" },
  { name: 'Apple iPad Pro 12.9"', price: "₹98000" },
  { name: "Samsung Galaxy Tab S8", price: "₹60000" },
  { name: "Apple Watch Series 8", price: "₹30000" },
  { name: "Samsung Galaxy Watch 5", price: "₹19000" },
  { name: "Sony WH-1000XM4 Headphones", price: "₹18000" },
  { name: "Bose QuietComfort 45", price: "₹50000" },
  { name: 'LG OLED55CXPUA 55" 4K TV', price: "₹120000" },
  { name: 'Samsung QN90A 65" 4K TV', price: "₹95000" },
];

const Products = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Electronic Products</h1>
        </div>
      </header>
      <button onClick={() => window.location.href = 'index.html'}>
        Back to Dashboard
      </button>
      <div className="container">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p className="availability">Available</p>
            <i className="fas fa-cart-plus add-to-cart"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
