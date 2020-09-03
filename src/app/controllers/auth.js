const mongoose = require('mongoose');
const bCript = require('bcrypt');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/app');

const User = mongoose.model('User');
const signIn = (req, res) => {
	const {name, password} = req.body;
	User.findOne({name})
		.exec()
		.then((user) => {
			if (!user) {
				return res.status(401).json({message: 'User dos not exit!'})
      }
			if (password === user.password) {
				const token = jwt.sign(user._id.toString(), jwtSecret)
				return res.json({token})
			} else {
				return res.status(401).json({message: 'Invalid credentials!'})
			}
		})
		.catch(err => res.status(500).json({message: err.message}))
};

module.exports = {
	signIn,
};
