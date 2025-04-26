import { Router } from "express";
import statsAPIController from "../../controllers/stats/statsAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las class features
router.get("/", statsAPIController.getAll);

//obtenemos una class feature
router.get("/:id", statsAPIController.getByID);

//creamos una class feature
router.post("/", isLoggedInAPI, isMaster, statsAPIController.create);

//actualizamos una class feature
router.put("/:id", isLoggedInAPI, isMaster, statsAPIController.edit);

//borramos una class feature
router.delete("/:id", isLoggedInAPI, isMaster, statsAPIController.remove);

export default router;
