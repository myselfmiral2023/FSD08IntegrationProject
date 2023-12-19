import jwt from "jsonwebtoken";
import { Song } from "../models/song.model.js";

const err = false;

const createSong = (req, res) => {
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

        // Create a Song
        const song = new Song({
            title: req.body.title,
            duration: req.body.duration,
            genre: req.body.genre,
            year: req.body.year,
            artistname: req.body.artistname,
            reviewId: req.body.reviewId,
            author: req.body.author,
            likesGrade: req.body.likesGrade,
            albumId: req.body.albumId
        });

        // Save Song in the database
        Song.createSong(song, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Song.",
                });
            } else {
                res.status(201).json("Song is created");
            }
        });
    //});
};

const updateSongById = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

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

        Song.updateSongById(
            req.params.id,
            new Song(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Song with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Song with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Song has been updated" });
                }
            }
        );
    //});
};

const getAllSongs = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");
    //     const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getAllSongs((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deleteSong = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.deleteSong(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Song with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Song with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Song has been deleted" });
            }
        });
    //});
};

const getSongByArtistname = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getSongByArtistname(req.params.artistname, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const getSongByAuthor = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getSongByAuthor(req.params.author, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const getSongByAlbumId = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getSongByAlbumId(req.params.albumId, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const getSongByYear = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getSongByYear(req.params.year, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const getSongByGenre = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Song.getSongByGenre(req.params.genre, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Songs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

export {
    createSong,
    updateSongById,
    getAllSongs,
    deleteSong,
    getSongByArtistname,
    getSongByAuthor,
    getSongByAlbumId,
    getSongByYear,
    getSongByGenre,
};
