let mongoose = require('mongoose');
let User = mongoose.model('User')

module.exports = (function() {
    return {
        login: function(req, res) {
            req.body.thread_count = 0;
            req.body.post_count = 0;
            req.body.comment_count = 0;
            User.findOne({ name: req.body.name }, function(err, data) {
                if (!data) {
                    let user = new User(req.body)
                    user.save(function(err) {
                        req.session.user = user;
                        req.session.user.save();
                        res.json({ status: true })
                    })
                } else {
                    req.session.user = data;
                    req.session.save();
                    res.json({ status: true })
                }
            })
        },
        getCurrUser: function(req, res){
            if(!req.session.user || req.session.user == null){
                res.send(null);
            } else {
                res.send(req.session.user);
            }
        },
        show_user: function(req, res){
            User.findOne({_id:req.params.id},function(err, user){
                res.json(user);
            })
        },
        logout: function(req, res){
            req.session.destroy()
                res.redirect('/')
        }
    }
})()
