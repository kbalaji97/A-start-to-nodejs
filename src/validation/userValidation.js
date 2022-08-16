const usersSignUpSchema = {
    type: "object",
    properties: {
      name: {type: "string"},
      email: {type: "string"},
      password: {type: "string"},
      age: {type: "integer"},
    },
    required: ["name","email","password"],
    additionalProperties: false
  }
  
  module.exports={
    usersSignUpSchema
}
  