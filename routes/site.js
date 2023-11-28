import SiteTouristiqueControllers from "../controllers/site.js";
import { Router } from "express";
import { verifyToken } from "../midlleware/auth.js";
const router = Router();

router.get("/",verifyToken, SiteTouristiqueControllers.getAll);
router.get("/:id",verifyToken, SiteTouristiqueControllers.getSiteTouristique);
router.put("/:id",verifyToken, SiteTouristiqueControllers.updateSiteTouristique);
router.post("/",verifyToken, SiteTouristiqueControllers.createSiteTouristique);
router.delete("/:id",verifyToken, SiteTouristiqueControllers.deleteSiteTouristique);
export default router;