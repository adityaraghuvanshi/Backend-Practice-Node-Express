var express = require("express");
var router = express();
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testing");

let schema=mongoose.Schema({
  companyCode:Number,
  company:String,
  diseaseCovered:{
    type:Array,
    default:[]
  },
  dateStarted:{
    type:Date,
    default:Date.now()
  },
  location:String
  

})

module.exports =mongoose.model("user",schema) ;
