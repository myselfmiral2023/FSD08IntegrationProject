import express from "express";
import { createPlaylistsong, updatePlaylistsongById, getAllPlaylistsongs, deletePlaylistsong } from "../controllers/playlistsong.controller.js";

const router = express.Router();

router.post("/create", createPlaylistsong);
router.put("/update/:id", updatePlaylistsongById);
router.get("/getAll", getAllPlaylistsongs);
router.delete("/delete/:id", deletePlaylistsong);

export default router;
