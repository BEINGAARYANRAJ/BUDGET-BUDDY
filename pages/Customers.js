import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/customers.css';



const initialReviews = [
  {
    name: "Ravi Kumar",
    service: "Excellent customer service and fast delivery.",
    rating: 5,
    review: "The staff was very helpful and the delivery was prompt. Highly recommend!",
    date: "2024-03-06",
    posted: "1 day ago"
  },
  {
    name: "Priya Sharma",
    service: "Great shopping experience.",
    rating: 4,
    review: "The store had a wide variety of products and the checkout process was smooth.",
    date: "2024-02-28",
    posted: "1 week ago"
  },
  {
    name: "Amit Verma",
    service: "Average service.",
    rating: 3,
    review: "The service was okay, but the delivery took longer than expected.",
    date: "2024-02-07",
    posted: "1 month ago"
  },
  {
    name: "Sunita Patel",
    service: "Fantastic experience.",
    rating: 5,
    review: "The staff was knowledgeable and helped me find exactly what I needed.",
    date: "2023-03-06",
    posted: "1 year ago"
  }
];

const Customer = () => {
  const [sortBy, setSortBy] = useState('rating');
  const sortedReviews = [...initialReviews].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div>
      <header className="header">
        <h1>Customer Reviews</h1>
      </header>

      <div className="container">
        <div className="sort-options">
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Rating</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div id="reviews">
          {sortedReviews.map((r, i) => (
            <div className="review" key={i}>
              <h3>{r.name}</h3>
              <p>Service: {r.service}</p>
              <p className="rating">
                Rating: {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
              <p>Review: {r.review}</p>
              <p>Posted: {r.posted}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
