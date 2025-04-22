import { Router } from "express";
import notesAPIController from "../../controllers/notes/notesAPIController.js";

const router = Router();

//obtenemos todas las notas
router.get("/", notesAPIController.getAll);

//obtenemos una nota
router.get("/:id", notesAPIController.getByID);


export default router;