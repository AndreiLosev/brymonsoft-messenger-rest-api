const auth = require('../app/controllers/auth');
const user = require('../app/controllers/users');
const message = require('../app/controllers/message');
const authMiddleware = require('../app/middleware/auth');


module.exports = (app) => {
	// auth
	app.post('/signin', auth.signIn);

	// users
	app.get('/user/:id', authMiddleware, user.getUsers);
	app.post('/user', authMiddleware, user.createUser);
	app.put('/user/:id', authMiddleware, user.userUpdate);
	app.delete('/user/:id', authMiddleware, user.removeUser);
	app.get('/find/:searchParam', authMiddleware, user.getFindUsers);

	// message
	app.post('/message', authMiddleware, message.createMessage);
	app.delete('/message/:id', authMiddleware, message.removeMessage);
	app.put('/message', authMiddleware, message.getMessage)
};
