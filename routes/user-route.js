const express = require("express");
const route = express.Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/user-controller");

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.post("/", createUser);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
