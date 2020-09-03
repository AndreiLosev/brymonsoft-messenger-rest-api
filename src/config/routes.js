const products = require('../app/controllers/products');
const auth = require('../app/controllers/auth');
const user = require('../app/controllers/users');
const message = require('../app/controllers/message');
//const authMiddleware = require('../app/middleware/auth');


module.exports = (app) => {
	// product
	app.get('/products', /*authMiddleware,*/ products.getAll);
	app.post('/products', /*authMiddleware,*/ products.create);
	app.put('/products/:id', /*authMiddleware,*/ products.update);
	app.delete('/products/:id', /*authMiddleware,*/ products.remove);

	// auth
	app.post('/signin', auth.signIn);
	// users
	app.get('/user', user.getAllUsers);
	app.post('/user', user.createUser);
	app.put('/user/:id', user.userUpdate);
	app.delete('/user/:name', user.removeUser);
	app.get('/find/:searchParam', user.getFindUsers);

	// message
	app.get('/message', message.getAll)
	app.post('/message', message.createMessage);
	app.delete('/message/:id', message.removeMessage);
	app.put('/message', message.getMessage)
};
