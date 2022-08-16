const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const usersSchema=new Schema({
    name:String,
    email:String,
    password:String,
    age:String,
})
const User=mongoose.model('user',usersSchema)
 module.exports=User

