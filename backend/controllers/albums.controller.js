import jwt from "jsonwebtoken";
import { Album } from "../models/albums.model.js";

const err = false;

const createAlbum = (req, res) => {
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

        // Create an Album
        const album = new Album({
            name: req.body.name,
            uploaderId: req.body.uploaderId,
            artistName: req.body.artistName,
            featuredArtist: req.body.featuredArtist,
            createdAt: new Date(),
        });

        // Save Album in the database
        Album.create(album, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Album.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updateAlbumById = (req, res) => {
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

        Album.updateById(
            req.params.id,
            new Album(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Album with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Album with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Album has been updated" });
                }
            }
        );
    //});
};

const getAllAlbums = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");
    
    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Album.getAllAlbums((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Albums.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deleteAlbum = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Album.remove(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Album with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Album with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Album has been deleted" });
            }
        });
    //});
};

export { createAlbum, updateAlbumById, getAllAlbums, deleteAlbum };
