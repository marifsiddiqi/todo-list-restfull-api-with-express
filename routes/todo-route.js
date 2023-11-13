const express = require("express");
const route = express.Router();

const { getAllTodo, getTodoById, createTodo, updateTodo, deleteTodo } = require("../controllers/todo-controller");


route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.put("/:id", updateTodo);
route.delete("/:id", deleteTodo);

module.exports = route;