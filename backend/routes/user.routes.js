import express from "express";
import { getUserForSideBar } from "../controllers/user.controller.js";
import protectedRouted from "../middleware/protectedRoutes.js";

const router = express.Router();

router.post("/", protectedRouted, getUserForSideBar);

export default router;
