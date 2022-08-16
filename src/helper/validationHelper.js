const Ajv = require("ajv")
const ajv = new Ajv()





function validateBody (schema){
    // console.log(schema,"schema");
    return function(req,res,next){
        let data =req.body;
        const validate = ajv.compile(schema)
        const valid = validate(data)
        if (!valid) {
            res.send(validate.errors)
            console.log(validate.errors)}
            else{
    next();
            }}
}
module.exports={
    validateBody
};