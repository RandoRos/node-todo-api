const {ObjectID} = require('mongodb');

const {mongoose} = require('./../Server/db/mongoose');
const {Todo} = require('./../Server/models/todo');
const {User} = require('./../Server/models/user');

// let id = '5add10ea017e01ec7ead1c3599';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

let id = '5adce10fdc17faa829219e31';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User by id found\n', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
