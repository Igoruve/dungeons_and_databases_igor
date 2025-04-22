import { Router } from "express";
import classAPIController from "../../controllers/class/classAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las clases
router.get("/", classAPIController.getAll);

//obtenemos una clase
router.get("/:id", classAPIController.getByID);

//creamos una clase
router.post("/", isLoggedInAPI, isMaster, classAPIController.create);

//actualizamos una clase
router.put("/:id", isLoggedInAPI, isMaster, classAPIController.edit);

//borramos una clase
router.delete("/:id", isLoggedInAPI, isMaster, classAPIController.remove);

export default router;
