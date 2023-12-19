import jwt from "jsonwebtoken";
import { Like } from "../models/like.model.js";

const err = false;

const createLike = (req, res) => {
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

        // Create a Like
        const like = new Like({
            userid: req.body.userid,
            songid: req.body.songid,
            likedAtDatetime: new Date(),
        });

        // Save Like in the database
        Like.create(like, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Like.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updateLikeById = (req, res) => {
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

        Like.updateById(
            req.params.my_row_id,
            new Like(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Like with id ${req.params.my_row_id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Like with id " + req.params.my_row_id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Like has been updated" });
                }
            }
        );
    //});
};

const getAllLikes = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Like.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Likes.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deleteLike = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Like.remove(req.params.my_row_id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Like with id ${req.params.my_row_id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Like with id " + req.params.my_row_id,
                    });
                }
            } else {
                res.status(200).send({ message: "Like has been deleted" });
            }
        });
    //});
};

export { createLike, updateLikeById, getAllLikes, deleteLike };
