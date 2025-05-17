import { Router } from "express";
import moneyAPIController from "../../controllers/money/moneyAPIController.js";
import { isLoggedInAPI, isMaster, isOwner } from "../../middleware/authMiddleware.js";
import moneyModel from "../../models/moneyModel.js";

const router = Router();

//obtenemos todos los dineros
router.get("/", moneyAPIController.getAll);

//obtenemos un dinero
router.get("/:id", moneyAPIController.getByID);

//creamos un dinero
router.post("/", /* isLoggedInAPI, isMaster, */ moneyAPIController.create);

//actualizamos un dinero
router.put("/:id", /* isLoggedInAPI, isOwner(moneyModel), */ moneyAPIController.edit);

//borramos un dinero
router.delete("/:id", /* isLoggedInAPI, isMaster, */ moneyAPIController.remove);

export default router;
