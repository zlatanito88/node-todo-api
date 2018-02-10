const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// remove all todos
Todo.remove({}).then((result) => {
    console.log(result);
});

// remove a todo
// 1. Todo.findOneAndRemove
// 2. Todo.findByIdAdnRemove
Todo.findOneAndRemove({ _id: '5a7edc80a07c0b37ccc8e042' }).then((todo) => {
    console.log(todo); // removes the todo and returns it
});

Todo.findByIdAndRemove('5a7edc80a07c0b37ccc8e042').then((todo) => {
    console.log(todo); // removes the todo and returns it
});