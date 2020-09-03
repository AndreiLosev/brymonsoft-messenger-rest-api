const mongoose = require('mongoose');

const MessageShema = new mongoose.Schema({
  text: String,
  created: { 
    type: Date,
    default: Date.now
	},
	authorID: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
  recipientID: { 
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
	},
	added: Boolean,
	viewed: Boolean,
});

mongoose.model('Message', MessageShema);