import express from "express";
import { test } from "../controllers/user_controllers.js";

const router = express.Router();

router.get("/", test);

export default router;
