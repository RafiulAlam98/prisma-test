import express from "express";
import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/add-category", CategoryController.insertIntoDb);
export const CategoryRoutes = router;
