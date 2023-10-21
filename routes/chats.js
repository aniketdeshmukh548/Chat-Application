const expresss = require("express");
const fs = require("fs");
const path=require('path')
const router = expresss.Router();
let arr = "";
router.get("/chats", (req, res, next) => {
    const displayMsg = fs.readFileSync("messages.txt");
    res.send(
      ` <h1>Welcome To Chats Page</h1>
      <form action="/chats" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
                <label for="message">Message:</label>
                <input type="text" id="message" name="title" required>
                <input type="hidden" id="username" name="username" >
                <button type="submit">Send</button>
              </form> ${displayMsg.toString()}`
    );
  });

router.post("/chats", (req, res, next) => {
    fs.writeFileSync("messages.txt", `${req.body.username} : ${req.body.title} `,{flag:'a'},(err)=>{
        err?console.log(err):res.redirect("/chats");
    })
    res.redirect('/chats')
    ;
  });

module.exports = router;