"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = express_1.Router();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res
        .status(201)
        .json({ message: "Added Successfully!", todo: newTodo, todos: todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const tId = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res
            .status(200)
            .json({ message: "Successfully updated!", todos: todos });
    }
    res.status(404).json({ message: "Couldn't find the item for this id." });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const tId = req.params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== tId);
    res.json({ message: "Item deleted successfully!", todos: todos });
});
exports.default = router;
