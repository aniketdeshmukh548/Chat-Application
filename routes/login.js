const path=require('path')
const express=require('express');

const router=express.Router()

router.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','html','login.html'))
    
})
router.post('/login',(req,res)=>{
    res.redirect('/')
})
module.exports=router