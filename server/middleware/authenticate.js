var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if(!user) {
            return Promise.reject(); // in this way the catch block fires
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send(); // 401 -> authentication required
    });
};

module.exports = { authenticate };