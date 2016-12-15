let mongoose = require('mongoose');
let Thread = mongoose.model('Thread');
let User = mongoose.model('User');

module.exports = (function(){
    return {
        add_thread: function(req, res){
            req.body._user = req.session.user._id;
            let thread = new Thread(req.body)
            thread.save(function(err){
                if(err){console.log('dag yo')}
                User.findOne({_id: req.session.user._id}, function(err, user){
                    user.thread_count += 1;
                    user.save()
                })
                res.json({status: true});
            })

        },
        show_threads: function(req, res){
            Thread.find({})
            .populate('_user')
            .exec(function(err, threads){
                res.json(threads);
            })
        }
    }
})()


