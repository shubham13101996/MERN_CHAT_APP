import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

// user register route
router.post("/register", registerUser);

// user login route

router.post("/login", loginUser);

// user logout route

router.post("/logout", logoutUser);

export default router;
