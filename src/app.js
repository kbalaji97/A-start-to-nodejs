
const express = require("express");
const userRoutes= require('./routes/userRoutes')
require("./config/db");

const app = express();
 const port =3001
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/users",userRoutes);
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});


/* todo 
1. validation for all api's
2.  http-status-code from npm package
3. login 
4.Authentication
5.Relational collections
6.__dirname
7.cors
8.fs module
9.morcon npm for logins,viston
10. .gitignore
11.crone job ,schedule job
12.populate and de-populate
13.error types
14.swagger
15.how to insert seed data in MongoDB
16.ref
17.cache
18.enum
19.pagination,search ,count
*/
