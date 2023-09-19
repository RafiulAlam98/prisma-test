import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", UserController.insertIntoDb);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/:id", UserController.getSingleUser);
router.get("/", UserController.getUsers);
export const UserRoutes = router;
