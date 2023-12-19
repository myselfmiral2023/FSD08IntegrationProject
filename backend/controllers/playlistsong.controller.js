import jwt from "jsonwebtoken";
import { Playlistsong } from "../models/playlistsong.model.js";

const err = false;

const createPlaylistsong = (req, res) => {
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

        // Create a Playlistsong
        const playlistsong = new Playlistsong({
            songId: req.body.songId,
            playlistId: req.body.playlistId,
        });

        // Save Playlistsong in the database
        Playlistsong.create(playlistsong, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Playlistsong.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updatePlaylistsongById = (req, res) => {
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

        Playlistsong.updateById(
            req.params.my_row_id,
            new Playlistsong(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Playlistsong with id ${req.params.my_row_id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Playlistsong with id " + req.params.my_row_id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Playlistsong has been updated" });
                }
            }
        );
    //});
};

const getAllPlaylistsongs = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Playlistsong.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Playlistsongs.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deletePlaylistsong = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Playlistsong.remove(req.params.my_row_id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Playlistsong with id ${req.params.my_row_id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Playlistsong with id " + req.params.my_row_id,
                    });
                }
            } else {
                res.status(200).send({ message: "Playlistsong has been deleted" });
            }
        });
    //});
};

export { createPlaylistsong, updatePlaylistsongById, getAllPlaylistsongs, deletePlaylistsong };
