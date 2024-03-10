const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()

adminrouter.get("/viewcustomers",admincontroller.viewcustomers)
adminrouter.delete("/deletecustomer/:email",admincontroller.deletecustomer)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

module.exports = adminrouter