import { Router } from "express";
import { getAllPost } from "../../Controllers/Post";

const router = Router();

router.get("/posts", getAllPost);

export default router;
