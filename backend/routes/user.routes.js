import express from "express";
import { getUserForSideBar } from "../controllers/user.controller.js";
import protectedRouted from "../middleware/protectedRoutes.js";

const router = express.Router();

router.get("/", protectedRouted, getUserForSideBar);

export default router;
