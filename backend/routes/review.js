import express from "express";
import { createReview, updateReviewById, getAllReviews, deleteReview, getReviewBySongId, getReviewByUserId } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/create", createReview);
router.put("/update/:id", updateReviewById);
router.get("/getAll", getAllReviews);
router.get("/getBySongId/:songId", getReviewBySongId);
router.get("/getByUserId/:userId", getReviewByUserId);
router.delete("/delete/:id", deleteReview);

export default router;
