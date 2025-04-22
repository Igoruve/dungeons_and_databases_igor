import { Router } from "express";
import characterAPIController from "../../controllers/character/characterAPIController.js";
import itemAPIController from "../../controllers/item/itemAPIController.js";
import speciesAPIController from "../../controllers/species/speciesAPIController.js";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todos los personajes
router.get("/", characterAPIController.getAll);

//obtenemos los items de un personaje
router.get("/:id/item", itemAPIController.getByCharacterID);

//obtenemos la especie de un personaje
router.get("/:id/species", speciesAPIController.getByCharacterID);

//obtenemos un personaje
router.get("/:id", characterAPIController.getByID);

//creamos un personaje
router.post("/", isLoggedInAPI, characterAPIController.create);

//actualizamos un personaje
router.put("/:id", isLoggedInAPI, characterAPIController.edit);

//borramos un personaje
router.delete("/:id", isLoggedInAPI, characterAPIController.remove);

export default router;
