import express, {Request, Response} from "express"
import { signup } from "../controllers/user.controller";

const router = express.Router();

router.post("/signup", signup);

export default router;