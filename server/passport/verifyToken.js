var jwt = require('jsonwebtoken');
const keys = require("./keys");

//Middleware to verify JWT token
function verifyToken(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        const authorization = req.get('authorization');
        if (authorization) {
            token = authorization.split('Bearer ')[1];
        }
    }

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, keys.jwt.secret, function (err, decoded) {
            if (err) {
                return res.status(400).send({ status: "Failure", message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(400).send({
            status: "Failure",
            message: 'No token provided.'
        });
    }
}

module.exports = verifyToken;