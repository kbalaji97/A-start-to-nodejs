const express = require("express");
const router = express.Router();
const userController=require('../controllers/userController')
const userValidator=require('../validation/userValidation')
const validateHelper =require('../helper/validationHelper')


router.post("/users",validateHelper.validateBody(userValidator.usersSignUpSchema), userController.usersSignUp)
router.get("/getUsers",userController.getUsers)
router.delete("/deleteUser/:id",userController.deleteUser)
router.put("/updateUser/:id",userController.updateUser)

module.exports=router