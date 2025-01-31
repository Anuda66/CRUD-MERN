// password = BvY3cy1HvZboEcOQ

const express = require("express"); // setup express to project
const mongoose = require("mongoose"); // setup mongoos to project
const router = require("./Route/UseRoute"); // insert user rought

const app = express();

//midle ware 
app.use(express.json());
app.use("/users", router); // insert data create responsive to json

//data base conncting
mongoose.connect("mongodb+srv://anudaransara:BvY3cy1HvZboEcOQ@cluster0.pzutk.mongodb.net/")

.then(() => {
    console.log("Connected MongoDB");
    return app.listen(5000);
})
.then(() => {
    console.log("Server is running on port 5000");
})
.catch((err) => console.log(err));




 


