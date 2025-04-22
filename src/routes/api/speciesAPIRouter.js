import { Router } from "express";
import speciesAPIController from "../../controllers/species/speciesAPIController.js";

const router = Router();

//obtenemos todos los usuarios
router.get("/", speciesAPIController.getAll);

//obtenemos un usuario
router.get("/:id", speciesAPIController.getByID);

export default router;
