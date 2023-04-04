/** import Library */
import { Router } from "express";
/** import Router */
import authRouter from "./authRouter.js";

/** Create router */
const router = Router();

/** connect Router */
router.use(authRouter)

export default router;