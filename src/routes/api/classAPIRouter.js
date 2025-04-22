import { Router } from "express";
import classAPIController from "../../controllers/class/classAPIController.js";
const router = Router();

//obtenemos todas las clases
router.get("/", classAPIController.getAll);

//obtenemos una clase
router.get("/:id", classAPIController.getByID);

export default router;
