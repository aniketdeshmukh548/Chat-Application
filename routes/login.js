const path=require('path')
const express=require('express');

const router=express.Router()

router.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','html','login.html'))
    
})
router.post('/login',(req,res)=>{
    const {username}=req.body
    console.log(req.body)
    res.send(`
    <script>
      localStorage.setItem('username', '${username}');
      window.location = '/';
    </script>
  `);
    res.redirect('/')
})
module.exports=router