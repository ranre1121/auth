import { Router } from "express";
import {
  registerUser,
  loginUser,
  authVerify,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify", authVerify);

export default router;
