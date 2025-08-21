import express, {Request, Response} from "express"
import { signup, login } from "../controllers/user.controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;