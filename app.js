// password = KNUXnE7zB099rvF4

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UseRoute");

const app = express();

//midle ware 
app.use(express.json());
app.use("/users", router);

//data base conncting
mongoose.connect("mongodb+srv://anuda:KNUXnE7zB099rvF4@cluster0.vzham.mongodb.net/")

.then(() => {
    console.log("Connected MongoDB");
    return app.listen(5000);
})
.then(() => {
    console.log("Server is running on port 5000");
})
.catch((err) => console.log(err));




 


