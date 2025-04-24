import { Router } from "express";
import { isLoggedInAPI } from "../../middleware/authMiddleware.js";
import characterAPIController from "../../controllers/character/characterAPIController.js";
import itemAPIController from "../../controllers/item/itemAPIController.js";
import statsAPIController from "../../controllers/stats/statsAPIController.js";
import speciesAPIController from "../../controllers/species/speciesAPIController.js";
import moneyAPIController from "../../controllers/money/moneyAPIController.js";
import classAPIController from "../../controllers/class/classAPIController.js";

const router = Router();

//obtenemos todos los personajes
router.get("/", characterAPIController.getAll);

router.get("/:id/class", classAPIController.getByCharacterID);

//obtenemos el dinero de un personaje
router.get("/:id/money", moneyAPIController.getByCharacterID);

//obtenemos las stats de un personaje
router.get("/:id/stats", statsAPIController.getByCharacterID);

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
