'use strict';
var database = {}

var mongodb = require('mongodb');
var config = require('../config.json');
var dbref=null;

database.getdb = function(next){
    if(!dbref){
        mongodb.MongoClient.connect(config.dbUrl,function(err,db){
            if(err){
                console.log("Unable to connect to the database!!");
				next(err,null)
            } else {
                // const db = client.db("test")
				dbref = {
					db:db,
                    orders: db.collection('orders')
                };
                db.collection('orders').createIndex({ },{ unique : true }, function(err){

					if(err)
					console.log("Error","Can't be connect"+err)
                })
                next(null, dbref);
            }
        });
    } else {
        next(null,dbref);
    }
}

module.exports = database;