let mongoose = require('mongoose'),
    commentSchema = mongoose.Schema({
        content: String,
        _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    });

mongoose.model('Comment', commentSchema)