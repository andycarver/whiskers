let mongoose = require('mongoose'),
    postSchema = mongoose.Schema({
        content: String,
        upvotes: Number,
        downvotes: Number,
        _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        _comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    });

mongoose.model('Post', postSchema)