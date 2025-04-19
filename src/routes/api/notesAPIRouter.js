import { Router } from "express";
import notesAPIController from "../../controllers/notes/notesAPIController.js";

const router = Router();

//obtenemos todas las notas
router.get("/", notesAPIController.getAll);

//obtenemos una nota  
router.get("/:id", notesAPIController.getByID);

//creamos una nota
router.post("/", notesAPIController.create);

//actualizamos una nota  
router.put("/:id", notesAPIController.update);

//borramos una nota  
router.delete("/:id", notesAPIController.remove);


export default router;