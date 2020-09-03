const mongoose = require('mongoose');
const {User} = require('./users');


const Message = mongoose.model('Message');

const getAll = (req, res) => Message.find()
  .exec()
  .then((messages) => res.json(messages))
	.catch(err => res.status(500).json(err))

const getMessage = async (req, res) => {
	try {
		await Message.updateMany({authorID: req.body.interlocutorID, recipientID: req.body.userID, viewed: false}, {viewed: true}).exec()
		const messages = await Promise.all([
			Message.find({authorID: req.body.userID, recipientID: req.body.interlocutorID}).exec(),
			Message.find({authorID: req.body.interlocutorID, recipientID: req.body.userID}, {viewed: 0, added: 0}).exec(),
			User.find({_id: req.body.userID}, {name: 1, avatar: 1}),
			User.find({_id: req.body.interlocutorID}, {name: 1, avatar: 1}),
		]);
		const posts = [...messages[0], ...messages[1]]
			.sort((a, b) => +a.created - +b.created)
			.map(item => {
				return item.authorID.toString() === messages[2][0]._id.toString()
				? {...item._doc, name: messages[2][0].name, avatar: messages[2][0].avatar}
				: {...item._doc, name: messages[3][0].name, avatar: messages[3][0].avatar}
			})
		res.json(posts)
	} catch (err) {
		res.status(500).json(err);
	}
}

const createMessage = (req, res) =>  Message.create({...req.body, added: true, viewed: false})
  // .exec()
	.then((message) => res.json(message))
  .catch(err => res.status(500).json(err))

// const update = (req, res) => Product.findOneAndUpdate({id: req.params.id}, req.body)
//     .exec()
//     .then((product) => res.json(product))
//     .catch(err => res.status(500).json(err))

const removeMessage = (req, res) => Message.deleteOne({_id: req.params.id})
  .exec()
  .then((message) => res.json(message))
  .catch(err => res.status(500).json(err))

module.exports = {
	getMessage,
	createMessage,
	removeMessage,
	getAll,
};