const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId;

const codeSchema = new mongoose.Schema(
  {
    userId :{
         type : ObjectId,
         required : true,
         ref : "User",
    },
    name : {
      type : String,
    },
   html : {
    type : String,
   },
   css : {
    type : String,
   },
   js : {
    type : String,
   },
   createdBy : {
    type : String,
   }
  
  },
  { timestamps: true }
);

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;