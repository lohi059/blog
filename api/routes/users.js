const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try{
            const updatedUser = await User.findById(req.params.id,{
                $set:req.body,
            })
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("you can update only your account")
    }   
})

