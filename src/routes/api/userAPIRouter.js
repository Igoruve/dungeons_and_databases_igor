import { Router } from "express";
import userAPIController from "../../controllers/user/userAPIController.js";
import notesAPIController from "../../controllers/notes/notesAPIController.js";
import characterAPIController from "../../controllers/character/characterAPIController.js";
import { isLoggedInAPI, isSameUser } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todos los usuarios
router.get("/", userAPIController.getAll);

//obtenemos las notas de un usuario
router.get("/:id/notes", notesAPIController.getByUserID);

//obtenemos los personajes de un usuario
router.get("/:id/character", characterAPIController.getByUserID);

//obtenemos un usuario
router.get("/:id", userAPIController.getByID);

//creamos un usuario
router.post("/", userAPIController.create);

//actualizamos un usuario
router.put("/:id", isLoggedInAPI, isSameUser, userAPIController.edit);

//borramos un usuario
router.delete("/:id", isLoggedInAPI, isSameUser, userAPIController.remove);

export default router;
