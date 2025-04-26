import { Router } from "express";
import apiRouter from "./api/APIRouter.js";
import authAPIRouter from "./api/authAPIRouter.js";

// import viewRouter from "../routes/views/viewRouter.js";

const router = Router();

router.use("/api/auth", authAPIRouter);
router.use("/api", apiRouter);
// router.use("/", viewRouter);

export default router;
