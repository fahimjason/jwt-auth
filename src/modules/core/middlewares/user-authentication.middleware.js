const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['access_token'];

    if (!token) return res.status(403).send('Authorization failed.');

    try {
        const decoded = jwt.verify(token, 'first-project');
        req.user = decoded;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).send('Invalid Token.');
    }
}

module.exports = verifyToken;