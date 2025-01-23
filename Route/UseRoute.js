const express = require("express");
const route = express.Router();
//insert model
const User = require("../Model/UseModel");
//inser user controler
const UserController = require("../Controlers/UserControlles");

route.get("/",UserController.getAllUser);
route.post("/",UserController.addUser);
route.post("/:id",UserController.getById);

//export
module.exports = route;