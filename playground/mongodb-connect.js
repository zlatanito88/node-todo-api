// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // ES6 destructuring

// var obj = new ObjectID(); // to create object id
// console.log(obj);

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
  
    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name : 'Vito',
        age: 29,
        location: 'Monopoli'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
  
    client.close();
});