let mongoose = require('mongoose'),
    userSchema = mongoose.Schema({
        name: String,
        thread_count: Number,
        post_count: Number,
        comment_count: Number
    });

mongoose.model('User', userSchema)