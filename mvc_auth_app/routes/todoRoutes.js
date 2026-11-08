import express from "express";

import {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controller/todoController.js";

import authentication from "../Middleware/authentication.js";

const router = express.Router();

// All routes below require a valid JWT
router.use(authentication);

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;