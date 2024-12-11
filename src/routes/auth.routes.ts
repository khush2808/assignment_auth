import express from "express";
import AuthController from "../controllers/auth.controller";
import { validateInput } from "../middlewares/validation.middleware";
import { SignUpSchema, SignInSchema } from "../schemas/auth.schema";

const router = express.Router();

router.post("/signup", validateInput(SignUpSchema), AuthController.signUp);
router.post("/signin", validateInput(SignInSchema), AuthController.signIn);

export default router;
