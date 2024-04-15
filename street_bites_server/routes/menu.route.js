const express= require("express");
const { menuItems } = require("../controller/menu.controller");

const menuRouter= express.Router();

menuRouter.get("/", menuItems)

module.exports={
    menuRouter
}