import { Router } from "express";
import {
  isLoggedInAPI,
  isMaster,
  isOwnerOfCharacter,
} from "../../middleware/authMiddleware.js";
import characterAPIController from "../../controllers/character/characterAPIController.js";
import itemAPIController from "../../controllers/item/itemAPIController.js";
import speciesAPIController from "../../controllers/species/speciesAPIController.js";
import moneyAPIController from "../../controllers/money/moneyAPIController.js";
import classAPIController from "../../controllers/class/classAPIController.js";
import skillAPIController from "../../controllers/skill/skillAPIController.js";
import characterStatsController from "../../controllers/character/characterStatsController.js"; // Importar el controlador
const router = Router();

// Obtener las estadísticas de un personaje
router.get("/:id/stats", characterStatsController.getByCharacterID);

//obtenemos todos los personajes
router.get("/", isLoggedInAPI, isMaster, characterAPIController.getAll);

// Obtener las estadísticas de un personaje
router.get(
  "/:id/stats",
  isLoggedInAPI,
  isOwnerOfCharacter,
  characterStatsController.getByCharacterID
);

//obtenemos las habilidades de un personaje
router.get(
  "/:id/skill",
  isLoggedInAPI,
  isOwnerOfCharacter,
  skillAPIController.getByCharacterID
);

//obtenemos la clase de un personaje
router.get(
  "/:id/class",
  isLoggedInAPI,
  isOwnerOfCharacter,
  classAPIController.getByCharacterID
);

//obtenemos el dinero de un personaje
router.get(
  "/:id/money",
  isLoggedInAPI,
  isOwnerOfCharacter,
  moneyAPIController.getByCharacterID
);

//obtenemos los items de un personaje
router.get(
  "/:id/item",
  isLoggedInAPI,
  isOwnerOfCharacter,
  itemAPIController.getByCharacterID
);

//obtenemos la especie de un personaje
router.get(
  "/:id/species",
  isLoggedInAPI,
  isOwnerOfCharacter,
  speciesAPIController.getByCharacterID
);

//obtenemos un personaje
router.get(
  "/:id",
  isLoggedInAPI,
  isOwnerOfCharacter,
  characterAPIController.getByID
);

//creamos un personaje
router.post("/", isLoggedInAPI, characterAPIController.create);

//actualizamos un personaje
router.put(
  "/:id",
  isLoggedInAPI,
  isOwnerOfCharacter,
  characterAPIController.edit
);

//borramos un personaje
router.delete(
  "/:id",
  isLoggedInAPI,
  isOwnerOfCharacter,
  characterAPIController.remove
);

export default router;
