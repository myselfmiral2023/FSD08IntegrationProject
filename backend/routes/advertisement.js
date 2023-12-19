import express from "express";
import { createAdvertisement, updateAdvertisementById, getAllAdvertisements, deleteAdvertisement } 
    from "../controllers/advertisement.controller.js";

const router = express.Router();

router.post("/create", createAdvertisement);
router.put("/update/:id", updateAdvertisementById);
router.get("/getAll", getAllAdvertisements);
router.delete("/delete/:id", deleteAdvertisement);

export default router;
