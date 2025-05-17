import { Router } from "express";
import speciesFeatureAPIController from "../../controllers/species_feature/speciesFeatureAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las espcies
router.get("/", speciesFeatureAPIController.getAll);

//obtenemos una especie
router.get("/:id", speciesFeatureAPIController.getByID);

//creamos una especie
router.post("/", isLoggedInAPI, isMaster, speciesFeatureAPIController.create);

//actualizamos una especie
router.put("/:id", isLoggedInAPI, isMaster, speciesFeatureAPIController.edit);

//borramos una especie
router.delete("/:id", isLoggedInAPI, isMaster, speciesFeatureAPIController.remove);

export default router;
