const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const index = (req,res,next) => {
   
    User.find()
    .then(response => {
            res.json({
                status : true,
                response
            })
        })
    .catch(error =>{
            res.json({
                status : false,
                message:'An error !!'
            })
        })
}
const destroy = (req,res,next) => {
    let userID = req.body.userID
    
    User.findByIdAndRemove(userID)
    .then(() =>{
        res.json({
            status : true,
            message : 'User deleted successfully!'
        })
    })
    .catch(error =>{
        res.json({
            status : false,
            message : 'An error has Occured!'
        })
    })
}
const update = (req,res,next) => {
    let userID = req.body.userID

    let updatedData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password

    }
    User.findOne({name : updatedData.name},function(err,existingUSer){
        if(existingUSer==null){
            User.findOne({email:updatedData.email},function(err,existingEmail){
                if(existingEmail==null){
                    User.findByIdAndUpdate(userID,{$set: updatedData},{new : true})
                    .then(() =>{
                    res.json({
                        status : true,
                        message : 'User updated successfully!'
                        })
                    })
                    .catch(error =>{
                        res.json({
                        status : false,
                        message : 'An error has Occured!'
                        })
                    })
                }
                else{
                    res.json({
                        status : false,
                        message : "Email already exists"
                    })
                }
            })
        }
        else{
            res.json({
                status : false,
                message : "Username already exists"
            })   
        }
    })
    
}


const register = (req,res,next) =>{
    if(req.body.name == '' || req.body.password  == ''  || req.body.email == '' || req.body.confirmpassword == ''){
        res.status(400).json({status : false,message : "Please enter all fields!"})
    }
    else if(req.body.password!=req.body.confirmpassword){
        res.status(400).json({status : false,message : "Password Confirmation Failed!"})
    }
    else{
        User.findOne({name:req.body.name},function(err,existingUSer){
            if(existingUSer==null){
                User.findOne({email:req.body.email},function(err,existingEmail){
                    if(existingEmail==null){
                        bcrypt.hash(req.body.password,10,function(err,hashedPass){
                            if(err){
                                res.json({
                                    status : false,
                                    message : "Error Occured!"
                                })
                            }
                            let user = new User ({
                                name : req.body.name,
                                email: req.body.email,
                                password : hashedPass,
                                adminstatus : req.body.adminStatus
                            })
                            user.save()
                            .then(user => {
                                res.json({status:true,message:"Registration Complete!"})
                            })
                            .catch(error =>{
                                res.json({
                                    status : false,
                                    message : "Error Occured!"
                                })
                            })
                            
                        })
                    }
                    else{
                        res.status(400).json({status : false,message : "Email Already Exists!"})

                    }
                })
                
            }
            else{
                res.status(400).json({status : false,message : "Username Already Claimed!"})
            }
        })
        
        
    }
    
    
}
const login = (req,res,next) =>{
    var username = req.body.name
    var password = req.body.password
    if(username == '' ||password  == ''){
        res.status(400).json({status : false,message : "Please enter all fields!"})
    }
    User.findOne({name: username})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        status : false,
                        message : "Error Occured!"
                    })
                }
                if(result){
                    if(user.adminstatus){
                      
                      res.cookie(username=`${user.name}` , user.name, {maxAge:3600000})
                      res.json({status:true,message:"Signed In as Admin!",admin :true})
                      res.end()
                        
                    }
                    else{
                    
                    res.cookie("username" , user.name, {maxAge:3600000})
                    res.json({status:true,message:"Sign In Complete!"})
                    res.end()
                    }
                }
                else{
                    res.json({
                        status : false,
                        message : 'Password does not match!'
                    })
                }
            })
        }
        else{
            res.json({
                status : false,
                message : 'No user found!'
            })
        }
    })
}

module.exports = { 
    register,login,index,destroy,update
}