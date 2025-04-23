import { Router } from "express";
import statsAPIController from "../../controllers/stats/statsAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todos los objetos
router.get("/", statsAPIController.getAll);

//obtenemos un objeto
router.get("/:id", statsAPIController.getByID);

//creamos un objeto
router.post("/", isLoggedInAPI, statsAPIController.create);

//actualizamos un objeto
router.put("/:id", isLoggedInAPI, statsAPIController.edit);

//borramos un objeto
router.delete("/:id", isLoggedInAPI, statsAPIController.remove);

export default router;
