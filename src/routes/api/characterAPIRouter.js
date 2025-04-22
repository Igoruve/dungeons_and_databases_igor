import { Router } from "express";
import characterAPIController from "../../controllers/character/characterAPIController.js";

const router = Router();

//obtenemos todos los personajes
router.get("/", characterAPIController.getAll);

//obtenemos un personaje
router.get("/:id", characterAPIController.getByID);

//creamos un personaje
router.post("/", characterAPIController.create);

//actualizamos un personaje
router.put("/:id", characterAPIController.edit);

//borramos un personaje
router.delete("/:id", characterAPIController.remove);

export default router;