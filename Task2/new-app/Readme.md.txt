The task includes practice of Node Express 
the features include:
.import export in javascript:
	module.exports={a variable}
.import with 
	let variable=require(./filename);
.send something to screen in node express:
	res.send("Message");
.route a file:
	app.get("/routepath",function(req,res){
	Message	
};
.middleware
	app.use("/",function(req,res)
	{
		log
	})
.Template Engine: 
	app.set("view engine","ejs");
.Static files:
	Build Folders:
	public/
	.Stylesheets
	.Javascripts
	.images
	views/
	.index.ejs
	app.use(express.static,"/public")
change the log or response send to render i.e res.render
.start a node file with:
	1.node .\filenamewiththepath
**Notice: here everytime we make changes we have to restart the project.
	2.For automaticall reflection of changes install nodemon
	: npm i nodemon
**Notice: Now every project will run and reflect changes without need to restart again and again.

.creating Static files automatically with express generator: 
	1.install globally: npm install express-generator -g
	2.build a new project: npm express projectname --view=ejs
	3.Change directory to project: cd projectname
	4.Run The project: npx nodemon 

.first of all import mongoose by: 
	const mongoose=require("mongoose");
.Connect to mongoose:
	mongoose.connect("mongodb://127.0.0.1/27017/Give a database name");
.Create Schema:
	const schema=mongoose.Schema({key:type});
.build a model
	mongoose.model("name",schema);
.import model to index.js file:
	const userModel=require("./users");
.build routes for creation of model:
	router.get("/routePath",function(req,res)
	{
		const createdUser=userModel.create({key:put values in schema})
		res.send(createdUser);
Notice: to view data.
});
.build route to read the data from model:
router.get("/routePath",function(req,res)
	{
	const readUserData=userModel.find("key:value")  **(finds the first document with ref to key)
	
const readUserData=userModel.findOne("key:value")  **(finds the document with ref to key)
});
.build route to delete document from model:
	router.get("/routePath",function(req,res)
	{
	const deleteUser=userModel.deleteOne({key:value});
});
