import userControllers from "../controllers/users.js";
//import admin from "../controllers/admin.js";
import { Router } from "express";
const router = Router();

router.post("/login", userControllers.login)
router.get("/logout", userControllers.logout)

export default router;