import { Router } from "express";
import { getAllUser } from "../../Controllers/User";

const router = Router();

router.get("/users", getAllUser);

export default router;
