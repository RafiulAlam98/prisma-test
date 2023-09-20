import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertPost);
router.get("/", PostController.getAllPost);

export const PostRoutes = router;
