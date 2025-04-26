import { Router } from "express";
import notesAPIController from "../../controllers/notes/notesAPIController.js";
import { isLoggedInAPI, isOwner } from "../../middleware/authMiddleware.js";
import notesModel from "../../models/notesModel.js";

const router = Router();

//obtenemos todas las notas
router.get("/", notesAPIController.getAll);

//obtenemos una nota
router.get("/:id", notesAPIController.getByID);

//creamos una nota
router.post("/", isLoggedInAPI, notesAPIController.create);

//actualizamos una nota
router.put("/:id", isLoggedInAPI, isOwner(notesModel), notesAPIController.edit);

//borramos una nota
router.delete(
  "/:id",
  isLoggedInAPI,
  isOwner(notesModel),
  notesAPIController.remove
);

export default router;
