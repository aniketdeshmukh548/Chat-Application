const express=require('express');
const bodyParser=require('body-parser')
const app=express();

const loginRoutes=require('./routes/login')
const chatRoutes=require('./routes/chats')

app.use(bodyParser.urlencoded({extended:false}))
app.use(loginRoutes)
app.use(chatRoutes)

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome To Chat App</h1>')
    res.get({data})
})


app.listen(3000,()=>{
    console.log(`listening from port 300`)
})