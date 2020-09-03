const mongoose = require('mongoose');


const User = mongoose.model('User');

const createUser = (req, res) => User.create(req.body)
  // .exec()
  .then((createProduct) => res.json(createProduct))
  .catch(err => res.status(500).json(err))

const getAllUsers = (req, res) => User.find()
	.exec()
	.then((users) => res.json(users))
	.catch(err => res.status(500).json(err))

const removeUser = (req, res) => User.deleteOne({name: req.params.name})
	.exec()
	.then((products) => res.json(products))
	.catch(err => res.status(500).json(err))
	
module.exports = {
	getAllUsers,
	createUser,
	removeUser,
};
