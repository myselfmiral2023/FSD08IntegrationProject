import express from "express";
import { createPlayback, updatePlaybackById, getAllPlaybacks, deletePlayback } from "../controllers/playback.controller.js";

const router = express.Router();

router.post("/create", createPlayback);
router.put("/update/:id", updatePlaybackById);
router.get("/getAll", getAllPlaybacks);
router.delete("/delete/:id", deletePlayback);

export default router;
