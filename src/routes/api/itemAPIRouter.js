import { Router } from "express";
import itemAPIController from "../../controllers/item/itemAPIController.js";
import {
  isLoggedInAPI,
  isMaster,
  isOwner,
  isOwnerOfCharacter,
} from "../../middleware/authMiddleware.js";
import itemModel from "../../models/itemModel.js";

const router = Router();

//obtenemos todos los objetos
router.get("/", itemAPIController.getAll);

//obtenemos un objeto
router.get("/:id", itemAPIController.getByID);

//creamos un objeto
router.post("/", /* isLoggedInAPI, isMaster,  */itemAPIController.create);

//actualizamos un objeto
router.put("/:id", /* isLoggedInAPI, isOwner(itemModel),  */itemAPIController.edit);

//borramos un objeto
router.delete(
  "/:id",
/*   isLoggedInAPI,
  isOwner(itemModel), */
  itemAPIController.remove
);

export default router;
