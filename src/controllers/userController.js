const userRepository= require("../repository/userRepository")

const usersSignUp= async (req,res)=>{
    try {
        console.log("here in get user");
        let userBody =req.body;
       console.log(req.body);
       let user= await userRepository.signUp(userBody)
       if(user){
           return res.send(user);
       }
       else{
           return res.send("something went wrong");
       }
    } catch (error) {
        return res.send("sign up failed")
        
    }

}
const getUsers= async (req,res)=>{
    try {
      
       let users= await userRepository.getUsers()
       if(users){
           return res.status(200).send({
            "statusCode":200,
            "users":users
           });
       }
       else{
           return res.status(404).send({
            "statusCode":404,
            "message":"no users found"});
       }
    } catch (error) {
        return res.status(500).send({
            "statusCode":500,
            "message":"failed to fetch users",
            "debug-message":error.message
        })
        
    }
    

}
const deleteUser= async (req,res)=>{
    try {
      let id=req.params.id;
       let users= await userRepository.deleteUser(id)
       console.log(users,"deleteUser")
       if(users.deletedCount==1){
           return res.status(200).send({
            "statuscode":200,
            "users":"deleted user successfully"});
       }
       else{
        return res.status(404).send({
         "statusCode":404,
         "message":"failed to delete"});
    }
    } catch (error) {
        return res.status(500).send({
            "statusCode":500,
            "message":"failed to delete user",
            "debug-message":error.message
        })
        
    }
    

}
const updateUser= async (req,res)=>{
    try {
      let id=req.params.id;
      let name =req.body.name;
       let users= await userRepository.updateUser(id,name)
       if(!users){
        return res.status(200).send({
         "statuscode":200,
         "users":"updated user successfully"});
    }
    else{
        return res.status(404).send({
         "statusCode":404,
         "message":"no users found"});
    }
    } catch (error) {
        return res.status(500).send({
           "statusCode":500,
            "message":"failed to delete user",
            "debug-message":error.message})
        
    }
    

}
module.exports={
    usersSignUp,
    getUsers,
    deleteUser,
    updateUser

}