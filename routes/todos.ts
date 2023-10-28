import { Router } from "express";

import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo";

const router = Router();

router.get("/", getTodos);

router.post("/todo", addTodo);

router.put("/todo/:todoId", updateTodo);

router.delete("/todo/:todoId", deleteTodo);

export default router;