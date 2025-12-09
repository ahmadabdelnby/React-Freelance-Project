import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';
import './ReviewsTab.css';

const ReviewsTab = ({ reviews }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < rating ? 'star-filled' : 'star-empty'} />
        ));
    };

    return (
        <div className="reviews-tab">
            <div className="reviews-header">
                <h3 className="reviews-title">Client Reviews</h3>
                <p className="reviews-count">{reviews.length} reviews</p>
            </div>

            <div className="reviews-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <FaUserCircle className="reviewer-avatar" />
                                <div>
                                    <h4 className="reviewer-name">{review.clientName}</h4>
                                    <p className="review-date">{review.date}</p>
                                </div>
                            </div>
                            <div className="review-rating">
                                {renderStars(review.rating)}
                            </div>
                        </div>

                        <div className="review-content">
                            <h5 className="review-project-title">{review.projectTitle}</h5>
                            <p className="review-text">{review.comment}</p>
                        </div>

                        <div className="review-footer">
                            <span className="review-budget">${review.budget}</span>
                            <span className="review-duration">{review.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsTab;
