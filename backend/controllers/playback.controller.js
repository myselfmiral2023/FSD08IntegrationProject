import jwt from "jsonwebtoken";
import { Playback } from "../models/playback.model.js";

const err = false;

const createPlayback = (req, res) => {
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

        // Create a Playback
        const playback = new Playback({
            userId: req.body.userId,
            songId: req.body.songId,
            timeplayed: req.body.timeplayed,
        });

        // Save Playback in the database
        Playback.create(playback, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Playback.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updatePlaybackById = (req, res) => {
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

        Playback.updateById(
            req.params.id,
            new Playback(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Playback with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Playback with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Playback has been updated" });
                }
            }
        );
    //});
};

const getAllPlaybacks = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if(err) return res.status(403).json("Token is not valid!");

        Playback.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Playbacks.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deletePlayback = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Playback.remove(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Playback with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Playback with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Playback has been deleted" });
            }
        });
    //});
};

export { createPlayback, updatePlaybackById, getAllPlaybacks, deletePlayback };
