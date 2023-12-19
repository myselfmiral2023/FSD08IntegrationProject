import jwt from "jsonwebtoken";
import { Advertisement } from "../models/advertisement.model.js";

const err = false;
const createAdvertisement = (req, res) => {
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

        // Create an Advertisement
        const advertisement = new Advertisement({
            userId: req.body.userId,
            mp3: req.body.mp3,
            timeListenTo: req.body.timeListenTo,
            createdAt: new Date(),
        });

        // Save Advertisement in the database
        Advertisement.create(advertisement, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Advertisement.",
                });
            } else {
                res.status(201).json(data);
            }
        });
    //});
};

const updateAdvertisementById = (req, res) => {
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

        Advertisement.updateById(
            req.params.id,
            new Advertisement(req.body),
            (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found Advertisement with id ${req.params.id}.`,
                        });
                    } else {
                        res.status(500).send({
                            message: "Error updating Advertisement with id " + req.params.id,
                        });
                    }
                } else {
                    res.status(200).send({ message: "Advertisement has been updated" });
                }
            }
        );
    //});
};

const getAllAdvertisements = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Advertisement.getAll((err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving Advertisements.",
                });
            } else {
                res.json(data);
            }
        });
    //});
};

const deleteAdvertisement = (req, res) => {
    // const { authorization } = req.headers;
    // if (!authorization) return res.status(401).json("Not authenticated!");
    // const token = authorization.replace("Bearer ", "");

    // if (!token) return res.status(401).json("Not authenticated!");

    // jwt.verify(token, "10", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        Advertisement.remove(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Advertisement with id ${req.params.id}.`,
                    });
                } else {
                    res.status(500).send({
                        message: "Could not delete Advertisement with id " + req.params.id,
                    });
                }
            } else {
                res.status(200).send({ message: "Advertisement has been deleted" });
            }
        });
    //});
};

export { createAdvertisement, updateAdvertisementById, getAllAdvertisements, deleteAdvertisement };
