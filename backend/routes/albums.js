import express from "express";
import { createAlbum, updateAlbumById, getAllAlbums, deleteAlbum } from "../controllers/albums.controller.js";

const router = express.Router();

router.post("/create", createAlbum);
router.put("/update/:id", updateAlbumById);
router.get("/getAll", getAllAlbums);
router.delete("/delete/:id", deleteAlbum);

export default router;
