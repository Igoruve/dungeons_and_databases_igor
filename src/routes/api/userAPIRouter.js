import { Router } from "express";
import userAPIController from "../../controllers/user/userAPIController.js";
import notesAPIController from "../../controllers/notes/notesAPIController.js";
import characterAPIController from "../../controllers/character/characterAPIController.js";
import { isLoggedInAPI, isMaster, isOwnerUser } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todos los usuarios
router.get("/", isMaster, userAPIController.getAll);

//obtenemos las notas de un usuario
router.get("/:id/notes", isOwnerUser, notesAPIController.getByUserID);

//obtenemos los personajes de un usuario
router.get("/:id/character", isOwnerUser, characterAPIController.getByUserID);

//obtenemos un usuario
router.get("/:id", isMaster, userAPIController.getByID);

//creamos un usuario
router.post("/", userAPIController.create);

//actualizamos un usuario
router.put("/:id", isLoggedInAPI, isOwnerUser, userAPIController.edit);

//borramos un usuario
router.delete("/:id", isLoggedInAPI, isOwnerUser, userAPIController.remove);

export default router;
