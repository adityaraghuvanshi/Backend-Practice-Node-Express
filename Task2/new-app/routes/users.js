const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice");

const schema=mongoose.Schema({
	employeeName:String,
	designation:String,
	yob:Number
})

module.exports=mongoose.model("info",schema);

