import { Router } from "express";
import itemAPIController from "../../controllers/item/itemAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todos los objetos
router.get("/", itemAPIController.getAll);

//obtenemos un objeto
router.get("/:id", itemAPIController.getByID);

//creamos un objeto
router.post("/", isLoggedInAPI, isMaster, itemAPIController.create);

//actualizamos un objeto
router.put("/:id", isLoggedInAPI, isMaster, itemAPIController.edit);

//borramos un objeto
router.delete("/:id", isLoggedInAPI, isMaster, itemAPIController.remove);

export default router;
