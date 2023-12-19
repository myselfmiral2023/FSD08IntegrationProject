import jwt from "jsonwebtoken";
import { Review } from "../models/review.model.js";

const err = false;

const createReview = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        // Validate request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        // Create a Review
        const review = new Review({
            description: req.body.description,
            songId: req.body.songId,
            userId: req.body.userId,
        });

        // Save Review in the database
        Review.createReview(review, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Review.",
                });
            } else {
                res.status(201).json("Review is created");
            }
        });
    //});
};

const updateReviewById = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        // Validate Request
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!",
            });
            return;
        }

        Review.updateReviewById(
            req.params.id,
            new Review(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Review with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Review with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Review has been updated" });
                }
            }
        );
    //});
};

const getAllReviews = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Review.getAllReviews((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Reviews.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deleteReview = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Review.deleteReview(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Review with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Review with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Review has been deleted" });
            }
        });
    //});
};

const getReviewBySongId = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Review.getReviewBySongId(req.params.songId, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Reviews.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const getReviewByUserId = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Review.getReviewByUserId(req.params.userId, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Reviews.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

export {
    createReview,
    updateReviewById,
    getAllReviews,
    deleteReview,
    getReviewBySongId,
    getReviewByUserId,
};
