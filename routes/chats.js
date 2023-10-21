const path=require('path')
const express=require('express');

const router=express.Router()

router.get('/chats',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','html','chats.html'))
})
router.post('/send', (req, res) => {
    //const username = req.cookies.username;
    const message = req.body.message;
  
    //const data = `${username}: ${message}\n`;
    const data = `${message}\n`;
    console.log(data)
    {data}
    require('fs').appendFile('messages.txt', data, (err) => {
      if (err) {
        console.error(err);
      }
    });
  
    res.redirect('/');
  });
// router.post('/chats',(req,res)=>{
//     res.redirect('/send')
// })
module.exports=router