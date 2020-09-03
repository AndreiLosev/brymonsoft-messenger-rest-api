const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../../config/app');


module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!authHeader) {
		return res.status(401).json({message: 'Token not provided!'});
	}
	const token = authHeader.replace('Bearer ', '');
	try {
		jwt.verify(token, jwtSecret)
	} catch (err) {
		if (err instanceof jwt.JsonWebTokenError) {
			return res.status(401).json({message: 'Invalid token!'})
		}
	}
	next();
};
