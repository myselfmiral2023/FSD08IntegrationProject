// models/review.js
import { sql } from "../config/db.js";

// constructor
const Review = function (review) {
    this.id = review.id;
    this.description = review.description;
    this.songId = review.songId;
    this.userId = review.userId;
};

Review.createReview = (newReview, result) => {
    const q = "INSERT INTO review SET ?";
    sql.query(q, newReview, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Review.updateReviewById = (reviewId, updatedReview, result) => {
    const q = "UPDATE review SET ? WHERE id = ?";
    sql.query(q, [updatedReview, reviewId], (err) => {
        if (err) return result(err);
        result(null);
    });
};

Review.getAllReviews = (result) => {
    const q = "SELECT * FROM review";
    sql.query(q, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Review.deleteReview = (reviewId, result) => {
    const q = "DELETE FROM review WHERE id = ?";
    sql.query(q, reviewId, (err) => {
        if (err) return result(err);
        result(null);
    });
};

Review.getReviewBySongId = (songId, result) => {
    const q = "SELECT * FROM review WHERE songId = ?";
    sql.query(q, songId, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

Review.getReviewByUserId = (userId, result) => {
    const q = "SELECT * FROM review WHERE userId = ?";
    sql.query(q, userId, (err, data) => {
        if (err) return result(err);
        result(null, data);
    });
};

export {Review};
