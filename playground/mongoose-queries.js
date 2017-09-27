const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59cb07c2279cca9410bbd043';

User.findById(id).then((user)=>{
    if(!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e)=>{
    console.log(e);
});

// var id = '59cbb3910611c1534fa35f9f1';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid!!!');
// }

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo) {
//         return console.log('Can not find');
//     }
//     console.log('Todo by id: ', todo);
// }).catch((e)=>{
//     console.log(e);
// })