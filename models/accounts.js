var mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    account_id:{
        type:String,
        required:true,
    },
    sin:{
        type:String,
        required:true,
    },
    bene_name:{
        type:String,
        required:true,
    },
    member_name:{
        type:String,
        required:true,
    },
    second_name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    school_name:{
        type:String,
        required:true,
    },
    school_status:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
});

var Account = module.exports = mongoose.model('Account',accountSchema);

// Get all accounts
module.exports.getAccounts = function(callback,limit){
    Account.find(callback).limit(limit);
};

//Get a specific account based on account_id
module.exports.getAccount = function(account,callback){
    Account.findOne(account,callback);
}