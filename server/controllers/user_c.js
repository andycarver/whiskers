let mongoose = require('mongoose');
let User = mongoose.model('User')

module.exports = (function() {
    return {
        login: function(req, res) {
            User.findOne({ name: req.body.name }, function(err, data) {
                if (!data) {
                    let user = new User(req.body)
                    user.save(function(err) {
                        req.session.user = user;
                        req.session.save();
                        res.json({ status: true })
                    })
                } else {
                    req.session.user = data;
                    req.session.save();
                    res.json({ status: true })
                }
            })
        }
    }
})()