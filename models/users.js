var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User',userSchema);


// Get Users
module.exports.getUsers = function(callback,limit){
    User.find(callback).limit(limit);
}

//Check login details
module.exports.login = function(user,callback){
    User.findOne({email:user.email},callback);
}