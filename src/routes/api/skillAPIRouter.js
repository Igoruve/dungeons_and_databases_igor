import { Router } from "express";
import skillAPIController from "../../controllers/skill/skillAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las skills
router.get("/", skillAPIController.getAll);

//obtenemos una skill
router.get("/:id", skillAPIController.getByID);

//creamos una skill
router.post("/", /* isLoggedInAPI, isMaster, */ skillAPIController.create);

//actualizamos una skill
router.put("/:id", /* isLoggedInAPI, isMaster, */ skillAPIController.edit);

//borramos una skill
router.delete("/:id", /* isLoggedInAPI, isMaster, */ skillAPIController.remove);

export default router;
