import express from "express";
import { createCharacter } from "../../controllers/createCharacter/createCharacter.js";

const router = express.Router();

router.post("/createcharacter", createCharacter);

export default router;