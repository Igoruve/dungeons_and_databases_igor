import { Router } from "express";
import itemAPIController from "../../controllers/item/itemAPIController.js";

const router = Router();

//obtenemos todos los usuarios
router.get("/", itemAPIController.getAll);

//obtenemos un usuario
router.get("/:id", itemAPIController.getByID);

//creamos un usuario
router.post("/", itemAPIController.create);

//actualizamos un usuario
router.put("/:id", itemAPIController.edit);

//borramos un usuario
router.delete("/:id", itemAPIController.remove);

// //obtenemos los personajes de un usuario
// router.get("/:id/characters", characterAPIController.getByitemID);

export default router;
