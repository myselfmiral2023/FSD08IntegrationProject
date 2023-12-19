import express from "express";
import { createPlaylist, updatePlaylistById, getAllPlaylists, deletePlaylist } from "../controllers/playlist.controller.js";

const router = express.Router();

router.post("/create", createPlaylist);
router.put("/update/:id", updatePlaylistById);
router.get("/getAll", getAllPlaylists);
router.delete("/delete/:id", deletePlaylist);

export default router;
