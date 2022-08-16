const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/users",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
const db=mongoose.connection;

db.on('error',console.error.bind(console,"error:"));
db.once('open',()=>{
    console.log("connected successfully");
})
mongoose.exports=db;
