import { Router } from "express";
import userAPIController from "../../controllers/user/userAPIController.js";
import notesAPIController from "../../controllers/notes/notesAPIController.js";

const router = Router();

//obtenemos todos los usuarios
router.get("/", userAPIController.getAll);

//obtenemos las notas de un usuario
router.get("/:id/notes", notesAPIController.getByID);

//obtenemos un usuario
router.get("/:id", userAPIController.getByID);

//creamos un usuario
router.post("/", userAPIController.create);

// //actualizamos un usuario
// router.put("/:id", userAPIController.update);

//borramos un usuario
router.delete("/:id", userAPIController.remove);

// //obtenemos los personajes de un usuario
// router.get("/:id/characters", characterAPIController.getByUserID);

export default router;
