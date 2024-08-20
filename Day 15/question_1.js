// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("gdsc");
    var collection = db.collection("persons");
    
    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$group": {
                "_id": {
                    "isActive": "$isActive",
                    "gender": "$gender"
                },
                "count": {
                    "$sum": 1
                }
            }
        }
    ];
    
    var cursor = collection.aggregate(pipeline, options);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});


// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("gdsc");
    var collection = db.collection("persons");
    
    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$group": {
                "_id": "$favoriteFruit",
                "count": {
                    "$sum": 1
                }
            }
        }, 
        {
            "$sort": {
                "count": -1
            }
        }
    ];
    
    var cursor = collection.aggregate(pipeline, options);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});


// Requires official Node.js MongoDB Driver 3.0.0+
var mongodb = require("mongodb");

var client = mongodb.MongoClient;
var url = "mongodb://host:port/";

client.connect(url, function (err, client) {
    
    var db = client.db("gdsc");
    var collection = db.collection("persons");
    
    var options = {
        allowDiskUse: false
    };
    
    var pipeline = [
        {
            "$group": {
                "_id": "$company.location.country",
                "averageage": {
                    "$avg": "$age"
                }
            }
        }
    ];
    
    var cursor = collection.aggregate(pipeline, options);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});
