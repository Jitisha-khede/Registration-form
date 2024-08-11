const express = require('express');
const router = express.Router();
const User = require('./../models/user'); 
const multer = require('multer');
const path = require('path'); 
const { model } = require('mongoose');

let storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname+'_'+Date.now()+'_'+file.originalname);
    },
})

let upload = multer({
    storage: storage,
}).single('Payimage');

router.get('/',(req,res)=>{
    res.render('home',{title:'Home Page'});
})

router.post('/',upload,async (req,res)=>{
    try{
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        year: req.body.year,
        branch: req.body.branch,
        Payimage: req.file.filename,
        TransactionId: req.body.TransactionId
    });
   
    await user.save();
    res.render('success');
   }
   catch(err){
    console.log(err);
   }
})

router.get('/users',(req,res)=>{
    res.send('All users');
})

module.exports = router;