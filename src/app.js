const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");


app.post("/signup", async(req, res) =>{
      
     try {
          const user = new User({
               firstName : "saif",
               lastName : "Ali",
               email : "sa5194007@gmail.com",
               password: "saif1234",
               gender :"male"
          });
     
          await user.save();
          res.send("user created successfully")
     } catch (error) {
          res.status(400).send(error.message);
     }
})

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });