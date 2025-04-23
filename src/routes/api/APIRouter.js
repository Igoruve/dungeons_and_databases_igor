import { Router } from "express";
import userAPIRouter from "./userAPIRouter.js";
import notesAPIRouter from "./notesAPIRouter.js";
import characterAPIRouter from "./characterAPIRouter.js";
import itemAPIRouter from "./itemAPIRouter.js";
import classAPIRouter from "./classAPIRouter.js";
import speciesAPIRouter from "./speciesAPIRouter.js";
import authAPIRouter from "./authAPIRouter.js";
import statsAPIRouter from "./statsAPIRouter.js";
import moneyAPIRouter from "./moneyAPIRouter.js";
import notesAPIController from "../../controllers/notes/notesAPIController.js";
import characterAPIController from "../../controllers/character/characterAPIController.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome friends!");
});

router.use("/money", moneyAPIRouter);
router.use("/stats", statsAPIRouter);
router.use("/species", speciesAPIRouter);
router.use("/class", classAPIRouter);
router.use("/item", itemAPIRouter);
router.use("/character", characterAPIRouter);
router.use("/notes", notesAPIRouter);
router.use("/user", userAPIRouter);
router.use("/login", authAPIRouter);
router.use("/register", authAPIRouter);

export default router;
