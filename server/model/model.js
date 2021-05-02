var Sequence = require('sequence').Sequence;
var database = require("./database");
var ObjectID = require('mongodb').ObjectID;

exports.getOrders = function(ip, cb){
    var db;
    var sequence = Sequence.create();
    sequence.then(function(next){
        database.getdb(function(err, dbref){
            if(err){
                process.exit(1);
            } else {
                db = dbref;
                next();
            }
        })
    }).then(function(next){
        db.orders.find({}).toArray(function(err,res){
            console.log("resp",res)
            if(err){
                cb(err,null);
            } else {
                cb(null,res);
            }
        })
    })
} 

exports.updateOrderStatus = function(ip, cb){
    var db;
    var sequence = Sequence.create();
    sequence.then(function(next){
        database.getdb(function(err, dbref){
            if(err){
                process.exit(1);
            } else {
                db = dbref;
                next();
            }
        })
    }).then(function(next){
        ip.updated_date = new Date();
        console.log("ip in model",ip)
        db.orders.update({_id:ObjectID(ip.id)},{$set:{status:ip.status,updated_date:ip.updated_date}},function(err, res){
            if( err &!res ){
                cb(err,null)
            } else {
                cb(null,res )
            }
        })
    })
}

