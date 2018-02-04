// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6 destructuring

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
  
    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({ 
    //     _id: new ObjectID('5a76eacb3c9bdbd9eb729877') 
    // }, { 
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({ 
        _id: new ObjectID('5a76e75e3c9bdbd9eb7297a0') 
    }, { 
        $set: {
            name: 'Rosa'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // client.close();
});