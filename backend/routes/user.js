import express from "express";
import { register, login, logout, findById } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getById/:id", findById);
export default router;
