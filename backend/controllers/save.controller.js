const Code = require("../models/Code")

const save = async(req,res) => {

    try{
        const newCode = new Code({
            userId : req.user._id,
            html : req.body.html,
            js : req.body.js,
            css: req.body.css,
            createdBy : req.body.createdBy,
            name : req.body.name,
         })
    
         await newCode.save()

         res.status(200).json(newCode)
    }
    catch(err){
        console.log("error in save contoller :",err.message);
        res.status(500).json({error : "Internal server error"})
    }
}

const send = async(req,res)  => {
    try{
        const code = await Code.findOne({createdBy : req.user.fullname}) 
        if(code){
           return res.status(200).json(code);
        }
        return res.status(400).send({error : "Code not found"}); 
    }
    catch(err){
        console.log('error in send :',err.message);
        res.status(500).send({error : "internal server error"})
    }
}
module.exports = {
    save,
    send,
}