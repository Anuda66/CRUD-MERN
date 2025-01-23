const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String, //data type
        require: true,//validate  
    },
    gmail:{
        type:String, //data type
        require: true,//validate  
    },
    age:{
        type:Number, //data type
        require: true,//validate  
    },
    address:{
        type:String, //data type
        require: true,//validate  
    },
});

module.exports = mongoose.model(
    "UserModel", //File name
    userSchema //function name
)