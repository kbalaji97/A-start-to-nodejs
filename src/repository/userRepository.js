const db=require('../config/db');
const { getUsers } = require('../controllers/userController');
const userModel=require("../models/userModel");


const userSignUpService ={
    async signUp(userBody){
        try {
            const user= new userModel(userBody)
            await user.save();
            return user;
        } catch (error) {
            return ("something went wrong");
        }
       
    },
    async getUsers(){
        try {
            const user= await userModel.find({});
            return user;
        } catch (error) {
            return ("something went wrong");
        }
       
    },
    async deleteUser(id){
        try {
            const user= await userModel.deleteOne({  "_id":id});
            return user;
        } catch (error) {
            return ("something went wrong");
        }
       
    },
    async updateUser(id,name){
        try {
            const user= await userModel.findOneAndUpdate({  "_id":id},{"name":name});
            return user;
        } catch (error) {
            return ("something went wrong");
        }
       
    }


}

module.exports =userSignUpService;