const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

 Users = require('./models/users'); 

// Connect to specified database
mongoose.connect('mongodb://kylwil29:wilson20@ds213338.mlab.com:13338/data_process');
const db = mongoose.connection;




// Routes
app.get('/db/check',(req,res) => {    
    Users.getUsers(function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));