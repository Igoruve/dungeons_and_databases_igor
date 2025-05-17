import { Router } from "express";
import classFeatureAPIController from "../../controllers/class_feature/classFeatureAPIController.js";
import { isLoggedInAPI, isMaster } from "../../middleware/authMiddleware.js";

const router = Router();

//obtenemos todas las clases
router.get("/", classFeatureAPIController.getAll);

//obtenemos una clase
router.get("/:id", classFeatureAPIController.getByID);

//creamos una clase
router.post("/", isLoggedInAPI, isMaster, classFeatureAPIController.create);

//actualizamos una clase
router.put("/:id", isLoggedInAPI, isMaster, classFeatureAPIController.edit);

//borramos una clase
router.delete(
  "/:id",
  isLoggedInAPI,
  isMaster,
  classFeatureAPIController.remove
);

export default router;
