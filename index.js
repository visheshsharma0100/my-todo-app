const express=require('express');
const jwt=require('jsonwebtoken');
const cors = require('cors');
app.use(cors());
const app=express();

app.use(express.json());
app.use(express.static(__dirname + "/Frontend"));

const notes=[];
const users=[{
    username:"Vishesh",
    password:"Vishesh@10"
}]

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    console.log("Signup attempt:", username, password); 
    console.log("Users array:", users); 
    const userExists=users.find(user=> user.username===username);
    if(userExists){
        return res.status(403).json({
            message:"User already Exists",
        })
    }
    users.push({
        username:username,
        password:password
    })
    res.json({ message: "Signup successful" });
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const userExists=users.find(user=> user.username===username);
    if(!userExists){
        return res.status(403).json({
            message:"Incorrect credentials",
        })
    }
    const token=jwt.sign({
        username:username
    },"Vishesh@10")
    res.json({
        token:token
    })
})

// Authentication Endpoint
app.post("/notes",function(req,res){
    const token=req.headers.token;
    if(!token){
        res.status(403).send({
            message:"You are not logged in"
        })
        return;
    }
    const decoded=jwt.verify(token,"Vishesh@10");
    const username=decoded.username;
    if(!username){
        res.status(403).json({
            message:"Malformed token"
        })
    }

    const note=req.body.note;
    notes.push({note,username});
    res.json({
        message:"Done!",
    })
})


app.get("/notes",function(req,res){
    const token=req.headers.token;
    if(!token){
        res.status(403).send({
            message:"You are not logged in"
        })
        return;
    }
    const decoded=jwt.verify(token,"Vishesh@10");
    const username=decoded.username;
    if(!username){
        res.status(403).json({
            message:"Malformed token"
        })
    }
    const usernote=notes.filter(note=>note.username===username);
    res.json({
        usernote
    })
})

app.get("/",function(req,res){
    res.sendFile(__dirname + "/Frontend/index.html");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running");
});
