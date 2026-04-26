import { Router } from "express";
import { getUserById, createUser, deleteUser, updateUserController, getUsers} from "../controllers/user.controller";

const router = Router();

// GET /users :id
router.get("/:id", getUserById);

// GET /users
router.get("/", getUsers);

// POST /users
router.post("/", createUser);

// PUT/PATCH /users :id
router.put("/:id", updateUserController);

//DELETE /users :id
router.delete("/:id", deleteUser);

export default router;