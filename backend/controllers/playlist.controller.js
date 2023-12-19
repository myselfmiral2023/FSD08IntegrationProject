import jwt from "jsonwebtoken";
import { Playlist } from "../models/playlist.model.js";

const err = false;

const createPlaylist = (req, res) => {
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

        // Create a Playlist
        const playlist = new Playlist({
            title: req.body.title,
            userId: req.body.userId,
            isPrivate: req.body.isPrivate,
        });

        // Save Playlist in the database
        Playlist.create(playlist, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Playlist.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updatePlaylistById = (req, res) => {
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

        Playlist.updateById(
            req.params.id,
            new Playlist(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Playlist with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Playlist with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Playlist has been updated" });
                }
            }
        );
    //});
};

const getAllPlaylists = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Playlist.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Playlists.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deletePlaylist = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Playlist.remove(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Playlist with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Playlist with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Playlist has been deleted" });
            }
        });
    //});
};

export { createPlaylist, updatePlaylistById, getAllPlaylists, deletePlaylist };
