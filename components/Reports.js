import React from 'react';
import './Reports.css';

function Reports() {
  const products = [
    { name: 'Mini USB', number: 4000, payment: 'Due', status: 'Pending' },
    { name: 'Wireless Mouse', number: 3201, payment: 'Paid', status: 'Completed' },
    { name: 'Bluetooth Speaker', number: 2587, payment: 'Due', status: 'Pending' },
    { name: 'Keyboard', number: 2587, payment: 'Due', status: 'Completed' },
  ];

  const reviews = [
    {
      name: 'Rahul Sharma',
      service: 'Excellent customer service and fast delivery.',
      rating: 5,
      review: 'The staff was very helpful and the delivery was prompt. Highly recommend!',
      posted: '1 day ago',
    },
    {
      name: 'Priya Iyer',
      service: 'Great shopping experience.',
      rating: 4,
      review: 'The store had a wide variety of products and the checkout process was smooth.',
      posted: '1 week ago',
    },
    {
      name: 'Vikram Reddy',
      service: 'Average service.',
      rating: 3,
      review: 'The service was okay, but the delivery took longer than expected.',
      posted: '1 month ago',
    },
    {
      name: 'Ananya Gupta',
      service: 'Fantastic experience.',
      rating: 5,
      review: 'The staff was knowledgeable and helped me find exactly what I needed.',
      posted: '1 year ago',
    },
    {
      name: 'Arjun Mehta',
      service: 'Good service.',
      rating: 4,
      review: 'The store was clean and well-organized. The staff was friendly.',
      posted: '2 days ago',
    },
  ];

  return (
    <div className="container">
      <h1>Website Report</h1>

      {/* Dashboard Overview */}
      <div className="section">
        <h2>Dashboard Overview</h2>
        <div className="card">
          <h3>Income</h3>
          <p>₹21,17,052</p>
          <span>Last 24 Hours • 80%</span>
        </div>
        <div className="card">
          <h3>Expenses</h3>
          <p>₹21,17,052</p>
          <span>Last 24 Hours • 80%</span>
        </div>
        <div className="card">
          <h3>Total Sales</h3>
          <p>₹21,17,052</p>
          <span>Last 24 Hours • 80%</span>
        </div>
      </div>

      {/* Products Overview */}
      <div className="section">
        <h2>Products Overview</h2>
        <div className="product">
          <h3>Apple iPhone 14 Pro</h3>
          <p>Price: ₹120000</p>
          <p className="availability">Available</p>
        </div>
        <div className="product">
          <h3>Samsung Galaxy S22 Ultra</h3>
          <p>Price: ₹121000</p>
          <p className="availability">Available</p>
        </div>
        <div className="product">
          <h3>Google Pixel 7 Pro</h3>
          <p>Price: ₹80000</p>
          <p className="availability">Available</p>
        </div>
        <div className="product">
          <h3>OnePlus 10 Pro</h3>
          <p>Price: ₹50000</p>
          <p className="availability">Available</p>
        </div>
        <div className="product">
          <h3>Apple MacBook Pro 16"</h3>
          <p>Price: ₹200000</p>
          <p className="availability">Available</p>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="section">
        <h2>Customer Reviews</h2>
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>Service: {review.service}</p>
            <p className="rating">Rating: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            <p>Review: {review.review}</p>
            <p>Posted: {review.posted}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="section">
        <h2>Recent Orders</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payments</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.number}</td>
                  <td>{product.payment}</td>
                  <td className={product.status === 'Completed' ? 'completed' : 'pending'}>
                    {product.status}
                  </td>
                  <td>
                    <a href="#">Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;
