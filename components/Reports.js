import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/reports.css';



const Reports = () => {
  return (
    <div class="container">
      <h1>Website Report</h1>

      
      <div class="section">
            <h2>Dashboard Overview</h2>
            <div class="card">
                <h3>Income</h3>
                <p>₹21,17,052</p>
                <span>Last 24 Hours • 80%</span>
            </div>
            <div class="card">
                <h3>Expenses</h3>
                <p>₹21,17,052</p>
                <span>Last 24 Hours • 80%</span>
            </div>
            <div class="card">
                <h3>Total Sales</h3>
                <p>₹21,17,052</p>
                <span>Last 24 Hours • 80%</span>
            </div>
        </div>

      {/* Products Section */}
      <div class="section">
            <h2>Products Overview</h2>
            <div class="product">
                <h3>Apple iPhone 14 Pro</h3>
                <p>Price: ₹120000</p>
                <p class="availability">Available</p>
            </div>
            <div class="product">
                <h3>Samsung Galaxy S22 Ultra</h3>
                <p>Price: ₹121000</p>
                <p class="availability">Available</p>
            </div>
            <div class="product">
                <h3>Google Pixel 7 Pro</h3>
                <p>Price: ₹80000</p>
                <p class="availability">Available</p>
            </div>
            <div class="product">
                <h3>OnePlus 10 Pro</h3>
                <p>Price: ₹50000</p>
                <p class="availability">Available</p>
            </div>
            <div class="product">
                <h3>Apple MacBook Pro 16"</h3>
                <p>Price: ₹200000</p>
                <p class="availability">Available</p>
            </div>
        </div>

      {/* Customer Reviews Section */}
      <div class="section">
            <h2>Customer Reviews</h2>
            <div class="review" data-rating="5" data-date="2024-03-06">
                <h3>Rahul Sharma</h3>
                <p>Service: Excellent customer service and fast delivery.</p>
                <p class="rating">Rating: ★★★★★</p>
                <p>Review: The staff was very helpful and the delivery was prompt. Highly recommend!</p>
                <p>Posted: 1 day ago</p>
            </div>
            <div class="review" data-rating="4" data-date="2024-02-28">
                <h3>Priya Iyer</h3>
                <p>Service: Great shopping experience.</p>
                <p class="rating">Rating: ★★★★☆</p>
                <p>Review: The store had a wide variety of products and the checkout process was smooth.</p>
                <p>Posted: 1 week ago</p>
            </div>
            <div class="review" data-rating="3" data-date="2024-02-07">
                <h3>Vikram Reddy</h3>
                <p>Service: Average service.</p>
                <p class="rating">Rating: ★★★☆☆</p>
                <p>Review: The service was okay, but the delivery took longer than expected.</p>
                <p>Posted: 1 month ago</p>
            </div>
            <div class="review" data-rating="5" data-date="2023-03-06">
                <h3>Ananya Gupta</h3>
                <p>Service: Fantastic experience.</p>
                <p class="rating">Rating: ★★★★★</p>
                <p>Review: The staff was knowledgeable and helped me find exactly what I needed.</p>
                <p>Posted: 1 year ago</p>
            </div>
            <div class="review" data-rating="4" data-date="2024-03-05">
                <h3>Arjun Mehta</h3>
                <p>Service: Good service.</p>
                <p class="rating">Rating: ★★★★☆</p>
                <p>Review: The store was clean and well-organized. The staff was friendly.</p>
                <p>Posted: 2 days ago</p>
            </div>
        </div>

      <div class="section">
            <h2>Recent Orders</h2>
            <div class="table-container">
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
                        <tr>
                            <td>Mini USB</td>
                            <td>4000</td>
                            <td>Due</td>
                            <td class="pending">Pending</td>
                            <td><a href="#">Details</a></td>
                        </tr>
                        <tr>
                            <td>Wireless Mouse</td>
                            <td>3201</td>
                            <td>Paid</td>
                            <td class="completed">Completed</td>
                            <td><a href="#">Details</a></td>
                        </tr>
                        <tr>
                            <td>Bluetooth Speaker</td>
                            <td>2587</td>
                            <td>Due</td>
                            <td class="pending">Pending</td>
                            <td><a href="#">Details</a></td>
                        </tr>
                        <tr>
                            <td>Keyboard</td>
                            <td>2587</td>
                            <td>Due</td>
                            <td class="completed">Completed</td>
                            <td><a href="#">Details</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px', color: '#aaa' }}>
        &copy; 2025 Shop Report Dashboard. All rights reserved.
      </footer>
    </div>
  );
};

export default Reports;
