import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectedRouted from "../middleware/protectedRoutes.js";
const router = express.Router();

router.get("/:id", protectedRouted, getMessage);

router.post("/send/:id", protectedRouted, sendMessage);

export default router;
