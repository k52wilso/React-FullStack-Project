const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

app.use(session({
    secret: 'my cats name again',
    resave: false,
    saveUninitialized: false,
    cookie: { 
      httpOnly: false, // key
      maxAge: null
    }
  }))

app.use(bodyParser.json());

 Users = require('./models/users'); 

// Connect to specified database
mongoose.connect('mongodb://kylwil29:wilson20@ds213338.mlab.com:13338/data_process');
const db = mongoose.connection;



 
// Routes
app.get('/users',(req,res) => {    
    Users.getUsers(function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

// Verify the login
app.post('/login',(req,res) => {
    var data = req.body;
    Users.login(data,function(err,user){
        if(err){
            throw err;      
        }
        
        if(user != null && data.password === user.password){
            req.session.user = user;
            res.json({status:"Success"});
        }else{
            res.json({status:"Failed"}); 
        }
    });
});

//check if already logged in
app.post('/logged',(req,res) => {
    if(req.session.user != null){
        res.json({logged:"Yes"});
    }else{
        res.json({logged:"No"});
    }
});

//check if already logged in
app.post('/logout',(req,res) => {
    req.session.user = null;
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));