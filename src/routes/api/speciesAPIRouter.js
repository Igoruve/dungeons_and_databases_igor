import { Router } from "express";
import speciesAPIController from "../../controllers/species/speciesAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las espcies
router.get("/", speciesAPIController.getAll);

//obtenemos una especie
router.get("/:id", speciesAPIController.getByID);

//creamos una especie
router.post("/", isLoggedInAPI, isMaster, speciesAPIController.create);

//actualizamos una especie
router.put("/:id", isLoggedInAPI, isMaster, speciesAPIController.edit);

//borramos una especie
router.delete("/:id", isLoggedInAPI, isMaster, speciesAPIController.remove);

export default router;
