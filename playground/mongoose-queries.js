const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5a774d7a8594e232f8a097f3';

if(!ObjectID.isValid(id)) {
    return console.log('Id not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by id', user);
}, (e) => console.log(e));