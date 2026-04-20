import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Review.css";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8181/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="reviews-container">
  <h2>All Reviews</h2>

  <button
    className="add-review-btn"
    onClick={() => navigate("/add-review")}
  >
    ✍️ Write a Review
  </button>

  <div className="reviews-list">
    {reviews.map((r) => (
      <div key={r._id} className="review-card">

        <div className="review-header">
          <div className="review-avatar">
            {r.name.charAt(0).toUpperCase()}
          </div>

          <div className="review-info">
            <h4>{r.name}</h4>
            <span className="review-date">{r.date}</span>
          </div>
        </div>

        <div className="review-rating">
          {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
        </div>

        <p className="review-comment">{r.comment}</p>

      </div>
    ))}
  </div>
</div>
  );
};

export default ReviewsPage;