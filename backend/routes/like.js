import express from "express";
import { createLike, updateLikeById, getAllLikes, deleteLike } from "../controllers/like.controller.js";

const router = express.Router();

router.post("/create", createLike);
router.put("/update/:id", updateLikeById);
router.get("/getAll", getAllLikes);
router.delete("/delete/:id", deleteLike);

export default router;
