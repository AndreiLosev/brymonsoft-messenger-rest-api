const mongoose = require('mongoose');


const User = mongoose.model('User');

const createUser = (req, res) => User.create(req.body)
  // .exec()
  .then((user) => res.json({message: 'user created', user: user}))
  .catch(err => res.status(500).json(err))

const userUpdate = (req, res) => User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
	.exec()
	.then((user) => res.json(user))
	.catch(err => res.status(500).json(err))

const getAllUsers = (req, res) => User.find()
	.exec()
	.then((users) => res.json(users))
	.catch(err => res.status(500).json(err))

const removeUser = (req, res) => User.deleteOne({_id: req.params.id})
	.exec()
	.then(() => res.json({message: 'user removed'}))
	.catch(err => res.status(500).json(err))

const getFindUsers = async (req, res) => {
	const search = new RegExp(`${req.params.searchParam}`, 'i');
	const users1 = await User.find({name: search}, {password: 0}).exec();
	if (users1.length) return res.json(users1);
	const users2 = await User.find({phone: search}).exec();
	return res.json(users2) 

};

module.exports = {
	getAllUsers,
	createUser,
	userUpdate,
	removeUser,
	getFindUsers,
	User,
};

