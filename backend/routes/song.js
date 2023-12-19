import express from "express";
import {
  createSong,
  updateSongById,
  getAllSongs,
  deleteSong,
  getSongByArtistname,
  getSongByAuthor,
  getSongByAlbumId,
  getSongByYear,
  getSongByGenre,
} from "../controllers/song.controller.js";

const router = express.Router();

router.post("/create", createSong);
router.put("/update/:id", updateSongById);
router.get("/getAll", getAllSongs);
router.get("/getByArtistname/:artistname", getSongByArtistname);
router.get("/getByAuthor/:author", getSongByAuthor);
router.get("/getByAlbumId/:albumId", getSongByAlbumId);
router.get("/getByYear/:year", getSongByYear);
router.get("/getByGenre/:genre", getSongByGenre);
router.delete("/delete/:id", deleteSong);

export default router;
